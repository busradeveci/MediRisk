# PostgreSQL Kurulum ve Yapılandırma Rehberi

Bu rehber, Medirisk uygulaması için PostgreSQL veritabanının kurulumu ve yapılandırmasını açıklar.

## 1. PostgreSQL Kurulumu

### Windows için:
1. [PostgreSQL İndirme Sayfası](https://www.postgresql.org/download/windows/) adresinden PostgreSQL'i indirin
2. Kurulum sırasında şu ayarları not edin:
   - **Port**: 5432 (varsayılan)
   - **Postgres kullanıcı şifresi**: Güvenli bir şifre belirleyin
   - **Locale**: Default locale

### macOS için:
```bash
# Homebrew ile kurulum
brew install postgresql
brew services start postgresql
```

### Linux (Ubuntu/Debian) için:
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## 2. Veritabanı Oluşturma

### PostgreSQL'e bağlanın:
```bash
# Windows (psql komut satırı)
psql -U postgres

# macOS/Linux
sudo -u postgres psql
```

### Veritabanı ve kullanıcı oluşturun:
```sql
-- Veritabanı oluştur
CREATE DATABASE medirisk;

-- Kullanıcı oluştur (opsiyonel)
CREATE USER medirisk_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE medirisk TO medirisk_user;

-- Veritabanına bağlan
\c medirisk
```

## 3. Environment Variables Ayarları

Proje kök dizininde `.env` dosyası oluşturun:

```env
# PostgreSQL Bağlantı Bilgileri
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=medirisk

# JWT Secret Key
SECRET_KEY=your_secret_key_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## 4. Uygulama Başlatma

### Backend başlatma:
```bash
cd backend
pip install -r requirements.txt
python main.py
```

### Frontend başlatma:
```bash
npm install
npm start
```

## 5. Veritabanı Tabloları

Uygulama ilk çalıştırıldığında otomatik olarak aşağıdaki tablolar oluşturulacaktır:

### Users Tablosu:
- `id`: Primary key
- `email`: Unique email adresi
- `name`: Kullanıcı adı
- `password_hash`: Şifrelenmiş parola
- `age`: Yaş
- `gender`: Cinsiyet
- `phone`: Telefon numarası
- `user_type`: Kullanıcı tipi (patient/doctor)
- `created_at`: Oluşturulma tarihi

### Test Results Tablosu:
- `id`: Primary key
- `user_id`: Users tablosuna foreign key
- `test_type`: Test türü
- `risk_score`: Risk skoru
- `risk_level`: Risk seviyesi
- `message`: Test mesajı
- `recommendations`: Öneriler (JSON)
- `form_data`: Form verileri (JSON)
- `created_at`: Oluşturulma tarihi

## 6. API Endpoints

### Kullanıcı Yönetimi:
- `POST /register`: Yeni kullanıcı kaydı
- `POST /login`: Kullanıcı girişi
- `GET /me`: Mevcut kullanıcı bilgileri

### Test Sonuçları:
- `GET /user/history`: Kullanıcının test geçmişi
- `POST /user/test-result`: Test sonucu kaydetme

## 7. Sorun Giderme

### Bağlantı Hatası:
- PostgreSQL servisinin çalıştığından emin olun
- Port 5432'nin açık olduğunu kontrol edin
- Firewall ayarlarını kontrol edin

### Yetki Hatası:
- Kullanıcının veritabanına erişim yetkisi olduğundan emin olun
- `.env` dosyasındaki bağlantı bilgilerini kontrol edin

### Tablo Oluşturma Hatası:
- Veritabanının mevcut olduğunu kontrol edin
- Kullanıcının CREATE TABLE yetkisi olduğundan emin olun

## 8. Güvenlik Notları

- Güçlü şifreler kullanın
- Production ortamında environment variables kullanın
- JWT secret key'i güvenli tutun
- Veritabanı bağlantısını SSL ile şifreleyin

## 9. Backup ve Restore

### Backup:
```bash
pg_dump -U postgres medirisk > medirisk_backup.sql
```

### Restore:
```bash
psql -U postgres medirisk < medirisk_backup.sql
```

## 10. Performans Optimizasyonu

- İndeksler oluşturun
- Connection pooling kullanın
- Query optimizasyonu yapın
- Regular maintenance planlayın 