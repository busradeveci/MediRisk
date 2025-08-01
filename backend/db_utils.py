#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Veritabanı yönetimi için yardımcı fonksiyonlar
Bu dosya terminal komutları için kullanılır
"""

from database import SessionLocal, User
from auth import get_password_hash, verify_password

def list_users():
    """Veritabanındaki tüm kullanıcıları listeler"""
    db = SessionLocal()
    try:
        users = db.query(User).all()
        print('📋 Veritabanındaki kullanıcılar:')
        print('=' * 50)
        if not users:
            print('❌ Hiç kullanıcı bulunamadı')
        else:
            for i, user in enumerate(users, 1):
                print(f'{i}. {user.email} ({user.name}) - {user.user_type}')
                print(f'   ID: {user.id}, Yaş: {user.age}, Cinsiyet: {user.gender}')
                print(f'   Kayıt Tarihi: {user.created_at}')
                print('-' * 30)
    finally:
        db.close()

def check_user_password(email, password):
    """Belirli bir kullanıcının şifresini kontrol eder"""
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == email).first()
        if user:
            print(f'👤 Kullanıcı: {user.email}')
            print(f'📝 Ad: {user.name}')
            print(f'🔐 Şifre doğru mu: {verify_password(password, user.password_hash)}')
            print(f'👥 Tip: {user.user_type}')
        else:
            print(f'❌ Kullanıcı bulunamadı: {email}')
    finally:
        db.close()

def create_user(email, name, password, age, gender, user_type='patient'):
    """Yeni kullanıcı oluşturur"""
    db = SessionLocal()
    try:
        # Kullanıcı zaten var mı kontrol et
        existing_user = db.query(User).filter(User.email == email).first()
        if existing_user:
            print(f'❌ Kullanıcı zaten mevcut: {email}')
            return
        
        # Yeni kullanıcı oluştur
        new_user = User(
            email=email,
            name=name,
            password_hash=get_password_hash(password),
            age=age,
            gender=gender,
            user_type=user_type
        )
        db.add(new_user)
        db.commit()
        print(f'✅ Kullanıcı oluşturuldu: {email}')
        print(f'   Ad: {name}')
        print(f'   Tip: {user_type}')
    except Exception as e:
        print(f'❌ Hata: {e}')
        db.rollback()
    finally:
        db.close()

def delete_user(email):
    """Kullanıcı siler"""
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == email).first()
        if user:
            db.delete(user)
            db.commit()
            print(f'✅ Kullanıcı silindi: {email}')
        else:
            print(f'❌ Kullanıcı bulunamadı: {email}')
    except Exception as e:
        print(f'❌ Hata: {e}')
        db.rollback()
    finally:
        db.close()

def reset_user_password(email, new_password):
    """Kullanıcı şifresini sıfırlar"""
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.email == email).first()
        if user:
            user.password_hash = get_password_hash(new_password)
            db.commit()
            print(f'✅ Şifre güncellendi: {email}')
        else:
            print(f'❌ Kullanıcı bulunamadı: {email}')
    except Exception as e:
        print(f'❌ Hata: {e}')
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    print("🔧 Veritabanı Yönetim Araçları")
    print("=" * 40)
    print("1. Kullanıcıları listele")
    print("2. Şifre kontrol et")
    print("3. Yeni kullanıcı oluştur")
    print("4. Kullanıcı sil")
    print("5. Şifre sıfırla")
    print("=" * 40)
    
    # Örnek kullanımlar:
    print("\n📝 Örnek kullanımlar:")
    print("list_users()")
    print("check_user_password('test@example.com', '123456')")
    print("create_user('test@example.com', 'Test User', '123456', 25, 'Erkek')")
    print("delete_user('test@example.com')")
    print("reset_user_password('test@example.com', 'yeni123')") 