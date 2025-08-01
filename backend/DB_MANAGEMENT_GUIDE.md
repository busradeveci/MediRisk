# 🔧 Veritabanı Yönetim Kılavuzu

Bu kılavuz, veritabanındaki kullanıcıları yönetmek için kullanılır.

## 📋 Kullanım

Backend klasöründe terminal açın ve şu komutları kullanın:

### 1. Veritabanındaki kullanıcıları listele
```python
from db_utils import list_users
list_users()
```

### 2. Kullanıcı şifresini kontrol et
```python
from db_utils import check_user_password
check_user_password('kullanici@email.com', 'sifre')
```

### 3. Yeni kullanıcı oluştur
```python
from db_utils import create_user
create_user('yeni@email.com', 'Yeni Kullanıcı', '123456', 25, 'Erkek', 'patient')
```

### 4. Kullanıcı sil
```python
from db_utils import delete_user
delete_user('silinecek@email.com')
```

### 5. Şifre sıfırla
```python
from db_utils import reset_user_password
reset_user_password('kullanici@email.com', 'yeni123')
```

## 🚀 Hızlı Başlangıç

1. Backend klasörüne gidin:
   ```bash
   cd backend
   ```

2. Python konsolunu açın:
   ```bash
   python
   ```

3. Modülü import edin:
   ```python
   from db_utils import *
   ```

4. Kullanıcıları listeleyin:
   ```python
   list_users()
   ```

## 📝 Örnek Senaryolar

### Senaryo 1: Mevcut kullanıcıları kontrol et
```python
list_users()
```

### Senaryo 2: Test kullanıcısı oluştur
```python
create_user('test@example.com', 'Test Kullanıcı', '123456', 30, 'Erkek')
```

### Senaryo 3: Şifre kontrolü
```python
check_user_password('test@example.com', '123456')
```

### Senaryo 4: Şifre değiştir
```python
reset_user_password('test@example.com', 'yeni456')
```

## ⚠️ Önemli Notlar

- Tüm işlemler güvenli şekilde yapılır
- Şifreler hash'lenerek saklanır
- Hata durumunda rollback yapılır
- Kullanıcı silme işlemi geri alınamaz

## 🔍 Sorun Giderme

### Kullanıcı bulunamıyor
- Email adresini kontrol edin
- Büyük/küçük harf duyarlılığına dikkat edin

### Şifre yanlış
- Şifrenin doğru olduğundan emin olun
- Özel karakterleri kontrol edin

### Veritabanı bağlantı hatası
- PostgreSQL servisinin çalıştığından emin olun
- Bağlantı bilgilerini kontrol edin 