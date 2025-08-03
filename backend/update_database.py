from sqlalchemy import text
from database import engine, SessionLocal

def update_database_schema():
    """Veritabanı şemasını günceller - age ve gender alanlarını nullable yapar"""
    try:
        with engine.connect() as connection:
            # PostgreSQL'de ALTER TABLE komutları
            connection.execute(text("ALTER TABLE users ALTER COLUMN age DROP NOT NULL;"))
            connection.execute(text("ALTER TABLE users ALTER COLUMN gender DROP NOT NULL;"))
            connection.commit()
            print("✅ Veritabanı şeması başarıyla güncellendi")
            print("   - age alanı nullable yapıldı")
            print("   - gender alanı nullable yapıldı")
    except Exception as e:
        print(f"❌ Veritabanı güncelleme hatası: {e}")
        # Eğer alanlar zaten nullable ise hata vermez
        if "does not exist" in str(e) or "already exists" in str(e):
            print("   - Alanlar zaten güncellenmiş olabilir")

if __name__ == "__main__":
    update_database_schema() 