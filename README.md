# MediRisk

## Takım İsmi
**MedOps Takımı**

##  Takım Üyeleri

| Name | Title | Socials |
|---|---|---|
| Büşra Deveci | Product Owner & Developer | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/busradeveci) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/busradeveci) |
| Feyzanur İnan | Scrum Master & Developer | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/feyzann) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/feyzanurinan/) |
| Eren Cice | Developer | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/erencice) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erencice/) |

## Ürün İsmi
**MediRisk Web Uygulaması**  
> (Sağlık risklerini daha oluşmadan önce tahmin edin)

## Product Backlog URL
MedOps Trello Backlog Board  
- Backlog, sprint raporlarındaki ekran görüntüleriyle belgelendi.

## Ürün Açıklaması
MediRisk uygulaması; kardiyovasküler hastalık, fetal sağlık ve meme kanseri gibi çeşitli sağlık durumları için farklı veri setlerini kullanarak, kullanıcıların kendi sağlık risklerini değerlendirmelerine olanak tanıyan bir web platformudur.  
Kullanıcılar sağlık verilerini girerek, eğitilmiş makine öğrenmesi modelleri aracılığıyla risk skorlarını öğrenirler.

## Ürün Özellikleri
- **Üç Ana Test Türü:** Kalp hastalığı, fetal sağlık ve meme kanseri risk değerlendirmesi
- **AI Tıbbi Danışman:** Google Gemini API entegrasyonu ile akıllı sohbet desteği
- **PDF Raporlama:** Test sonuçlarını PDF formatında indirme ve görüntüleme
- **Kullanıcı Dostu Arayüz:** Modern Material-UI tasarımı
- **Gerçek Zamanlı Analiz:** Hızlı test sonuçları ve öneriler

## Gereksinimler

### Sistem Gereksinimleri
- **Python:** 3.8 veya üzeri
- **Node.js:** 14.0 veya üzeri
- **NPM:** 6.0 veya üzeri

### Backend Dependencies (Python)
```txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
pandas>=2.0.0
numpy>=1.24.0
scikit-learn>=1.3.0
python-multipart==0.0.6
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
sqlalchemy==2.0.23
alembic==1.13.1
psycopg2-binary==2.9.9
python-dotenv==1.0.0
requests==2.31.0
joblib==1.3.2
aiohttp==3.9.1
google-generativeai>=0.3.0
```

### Frontend Dependencies (React)
```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@google/generative-ai": "^0.24.1",
  "@mui/icons-material": "^7.2.0",
  "@mui/material": "^7.2.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.3.0",
  "react-scripts": "5.0.1",
  "typescript": "^4.7.4"
}
```

### Hızlı Başlangıç
```bash
# 1. Projeyi klonlayın
git clone https://github.com/busradeveci/YZTA-AI-17.git
cd YZTA-AI-17

# 2. Otomatik kurulum ve başlatma
python run.py

# Manuel kurulum için:
# Backend: pip install -r backend/requirements.txt
# Frontend: npm install && npm start

# Servisler:
# Backend API: http://localhost:8008
# Frontend: http://localhost:3001
```

## Ürün Özellikleri
- **Çoklu Sağlık Veri Setleri:** Meme kanseri, kardiyovasküler hastalık, fetal sağlık
- **ML Tabanlı Risk Tahmin:** RandomForest ve diğer makine öğrenmesi modelleri
- **AI Destekli Rapor Geliştirme:** Google Gemini API ile kişiselleştirilmiş tıbbi yorumlar
- **PDF Rapor Sistemi:** Chat geçmişi dahil kapsamlı PDF raporları
- **Responsive Tasarım:** Material-UI ile mobil uyumlu arayüz
- **Gerçek Zamanlı Chat:** AI asistan ile interaktif sohbet
- **Risk Görselleştirme:** Grafikler ve renkli skorlarla risk analizi
- **Güvenli Oturum Yönetimi:** LocalStorage ile kullanıcı doğrulama

## Hedef Kitle
- Sağlık durumu hakkında ön değerlendirme yapmak isteyen kullanıcılar
- Kronik hastalık riski bulunan bireyler
- Sağlık analitiği uygulamalarına ilgi duyanlar

<details>
<summary> <h3> SPRINT 1 NOTLARI </h3> </summary>

- **Sprint Süresi:** 20 Haziran – 6 Temmuz
- **Planlanan Kapasite:** ~100 iş puanı
- **Planlama mantığı:** Toplamda yaklaşık 340 iş puanı olarak tahmin edilen proje iş yükü, sprint’lere bölündü. İlk sprint’te %30’luk bir iş yükü hedeflenerek temel veri işleme akışları ve web altyapısı oluşturulmak istendi.

---

### Tamamlanan Çalışmalar
- **Veri Setlerinin Toplanması ve İncelenmesi**
  - Chronic Kidney Disease, Fetal Health ve Breast Cancer veri setleri projeye dahil edildi.
  - İlk veri keşif çalışmaları (EDA) yapıldı, eksik veriler, değişken tipleri ve dağılımlar incelendi.

- **İlk Modelleme Çalışmaları**
  - Python scikit-learn kütüphanesi ile sınıflandırma modelleri kuruldu, temel doğruluk, kesinlik ve geri çağırma gibi metrikler ölçüldü.
  - Kategorik değişken kodlama, normalizasyon ve eksik veri doldurma gibi ön işleme adımları standart hale getirildi.

- **Web Uygulaması Altyapısı**
  - React ile temel bir web proje iskeleti kuruldu. Ana yönlendirmeler (routing) ve sayfa yapısı oluşturuldu.
  - Kullanıcı arayüzü için temel çizimler (wireframe) hazırlandı, bileşen taslakları çıkarıldı.

---

### Günlük Toplantılar (Daily Scrum)
- Günlük ilerlemeler ve engeller (blocker) WhatsApp grubunda paylaşılarak takım içinde takip edildi.
-  [WhatsApp görsellerine git](./sprintOne/wp_ss)

---

### Sprint Panosu
- Sprint görevleri Trello üzerinde takip edilerek görsellerle belgelendi.
-  [Trello görsellerine git](./sprintOne/trello_ss)

---

### Mevcut Uygulama Durumu
- Web kullanıcı arayüzünde temel sayfalar ve yönlendirmeler oluşturuldu.
- Makine öğrenmesi API’leri için temel sözleşmeler (endpoint planı) belirlendi.
-  [Web görsellerine git](./sprintOne/app_ss)

---

### Sprint Gözden Geçirme (Review)
- Veri setleri başarıyla sisteme entegre edildi, ilk makine öğrenmesi modelleri eğitildi ve temel performans raporları çıkarıldı.
- Frontend (React) ve backend (FastAPI + scikit-learn) teknolojilerine kesin olarak karar verildi.
- Son toplantıda, bir sonraki sprint için öncelikli işlerin tahmin ve veri tahmin servisleri olmasına karar verildi.

---

### Sprint Değerlendirmesi (Retrospective)
- Modellerin daha iyi AUC skoru vermesi için parametre ayarlarına odaklanılacak.
- Web özelliklerinin daha hızlı tamamlanabilmesi için haftasonu ek geliştirme oturumları yapılacak.
- Test kapsamının artırılması ve sürekli entegrasyon (CI) süreçlerinin başlatılması için backlog’a yeni işler eklendi.

---

## Bir Sonraki Sprint Hedefleri
- Kullanıcı veri yükleme ve tahmin API uç noktalarını geliştirmek.
- Eğitim modellerinin kapsamlı testlerini yaparak doğruluk ve güvenilirliklerini sağlamak.
- Kullanıcı risk skorlarını grafiklerle görselleştirecek bileşenleri oluşturmak.
- Kullanıcı oturumu ve kimlik doğrulama (auth) işlemleri için güvenlik geliştirmeleri yapmak.

---

## Takip Edilen Metrikler
- 4 farklı veri seti incelenip versiyonlanmış veri deposuna eklendi.
- İlk modeller eğitildi ve performans metrikleri kaydedildi.
- Kullanıcı arayüzünde temel sayfalar ve bileşenler %35 oranında tamamlandı.

</details>

<details>
<summary> <h3> SPRINT 2 NOTLARI </h3> </summary>

- **Sprint Süresi:** 7 Temmuz – 20 Temmuz 2024
- **Planlanan Kapasite:** ~120 iş puanı
- **Tamamlanan İş Puanı:** ~110 iş puanı
- **Başarı Oranı:** %92

---

### Tamamlanan Çalışmalar

#### Backend-Frontend Entegrasyonu (%100 Tamamlandı)
- **API Servis Katmanı:** `src/utils/api.ts` ile kapsamlı API katmanı oluşturuldu
- **FastAPI Backend:** `backend/main.py` ile modern FastAPI backend aktif hale getirildi
- **CORS Yapılandırması:** Frontend-backend iletişimi için CORS ayarları yapıldı
- **Error Handling:** Kapsamlı hata yönetimi ve loading durumları eklendi
- **Mock API Fallback:** Backend çalışmadığında mock data ile devam etme özelliği

#### Kullanıcı Arayüzü ve Test Yönetimi (%95 Tamamlandı)
- **Responsive Tasarım:** Material-UI ile tam mobil uyumlu tasarım
  - `gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }` breakpoint'leri
  - `flexDirection: { xs: 'column', lg: 'row' }` mobil düzen
  - `display: { xs: 'none', md: 'flex' }` responsive menü
- **Test Sayfaları:** `TestPage`, `TestResultPage`, `HistoryPage` bileşenleri
- **Form Validasyonu:** Her test tipi için özel validasyon kuralları
- **Görselleştirme:** Test sonuçları grafiklerle ve renkli chip'lerle gösteriliyor
- **PDF Export:** Test sonuçlarını PDF olarak dışa aktarma özelliği (simülasyon)

#### Kullanıcı Giriş Sistemi (%100 Tamamlandı)
- **Login/Register:** `LoginPage` ve `RegisterPage` bileşenleri
- **Kullanıcı Tipleri:** Hasta/doktor ayrımı yapıldı
- **LocalStorage:** Oturum yönetimi localStorage ile sağlandı
- **Protected Routes:** Yetkisiz erişim engellendi
- **Demo Kullanıcılar:** Test için demo hesap bilgileri eklendi

#### Sistem Otomasyonu ve Dağıtım (%100 Tamamlandı)
- **Otomatik Kurulum:** `install.py` ile tek komutla kurulum
- **Dağıtım Scripti:** `deploy.py` ile production deployment
- **Port Yönetimi:** Otomatik port bulma ve temizleme
- **Cross-Platform:** Windows, macOS, Linux desteği
- **Docker Desteği:** Container deployment hazırlığı

#### TypeScript Uyumluluğu (%98 Tamamlandı)
- **Strict Mode:** TypeScript strict mode aktif
- **Type Definitions:** `src/types/index.ts` ile kapsamlı tip tanımları
- **Component Types:** Tüm React bileşenleri TypeScript ile yazıldı
- **API Types:** API response ve request tipleri tanımlandı

---

### Sprint 2 Görsel Belgeleri

#### Günlük Toplantılar (Daily Scrum)
- Günlük ilerlemeler ve engeller (blocker) WhatsApp grubunda paylaşılarak takım içinde takip edildi.
- [WhatsApp görsellerine git](./sprintTwo/wp_ss)

#### Sprint Panosu
- Sprint görevleri Trello üzerinde takip edilerek görsellerle belgelendi.
- [Trello görsellerine git](./sprintTwo/trello_ss)

#### Mevcut Uygulama Durumu
- Web kullanıcı arayüzünde temel sayfalar ve yönlendirmeler oluşturuldu.
- Makine öğrenmesi API’leri için temel sözleşmeler belirlendi.
- [Web görsellerine git](./sprintTwo/app_ss)

---

### Teknik Detaylar

#### Backend (FastAPI)
```python
# backend/main.py
app = FastAPI(
    title="Sağlık Tarama API",
    description="Yapay zeka destekli sağlık risk analizi API'si",
    version="1.0.0"
)

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### Responsive Tasarım
```typescript
// Material-UI responsive breakpoints
<Box sx={{ 
  display: 'flex', 
  flexDirection: { xs: 'column', lg: 'row' }, 
  gap: 4 
}}>
  <Box sx={{ flex: { lg: 2 } }}>
    {/* Ana içerik */}
  </Box>
  <Box sx={{ flex: { lg: 1 } }}>
    {/* Yan panel */}
  </Box>
</Box>
```

---

### Test Edilen Özellikler

#### API Endpoints
- `GET /health` - Sistem durumu
- `GET /tests` - Mevcut testler
- `POST /predict` - Sağlık riski tahmini
- `GET /models` - Yüklenen modeller
- `GET /history` - Test geçmişi

#### Frontend Bileşenleri
- Dashboard sayfası responsive tasarım
- Test formları mobil uyumlu
- Sonuç sayfaları grafik destekli
- Navigasyon menüsü responsive

#### Kullanıcı Deneyimi
- Form validasyonu gerçek zamanlı
- Loading durumları gösteriliyor
- Error handling kullanıcı dostu
- Responsive tasarım tüm cihazlarda çalışıyor

---

### Eksik Kalan İşler

#### Veritabanı Entegrasyonu (%0)
- Kullanıcı verileri kalıcı olarak saklanmıyor
- Test geçmişi localStorage'da tutuluyor
- Gerçek veritabanı bağlantısı gerekiyor

#### Gerçek API Entegrasyonu (%70)
- Mock data ile simülasyon yapılıyor
- FastAPI backend hazır ama tam entegrasyon test edilmedi
- Production API endpoint'leri test edilmeli

#### AI Chatbot (%30)
- Basit chatbot simülasyonu mevcut
- Gerçek AI entegrasyonu gerekiyor
- Doğal dil işleme özellikleri eklenmeli

---

### Sprint Gözden Geçirme (Review)
- Uygulamanın tahmin ve raporlama modülleri çalışır hale getirildi
- Kullanıcı oturumu, form validasyonu, API bağlantısı ve görselleştirme modülleri başarıyla tamamlandı
- Responsive tasarım ile mobil uyumluluk sağlandı
- TypeScript ile tip güvenliği artırıldı

---

### Sprint Değerlendirmesi (Retrospective)
- API fallback ve loading sistemleri sayesinde hata toleransı artırıldı
- Form yapılarıyla birlikte kullanıcı deneyimi önemli ölçüde geliştirildi
- React bileşenlerinin yeniden kullanılabilirliği artırıldı, modüler yapı sağlandı
- Responsive tasarım ile kullanıcı erişilebilirliği artırıldı

---

## Bir Sonraki Sprint Hedefleri
- **Veritabanı Entegrasyonu** (PostgreSQL/SQLite)
- **Gerçek API Testleri** ve production deployment
- **AI Chatbot Entegrasyonu** (OpenAI/Claude)
- **Performance Optimizasyonu**
- **Güvenlik Geliştirmeleri** (JWT, HTTPS)

---

## Takip Edilen Metrikler
- **API Servis Katmanı:** %100
- **Kullanıcı Oturumu:** %100
- **Responsive Tasarım:** %95
- **TypeScript Uyumu:** %98
- **Test Yönetimi:** %90
- **Dağıtım Hazırlığı:** %100
- **Backend Entegrasyonu:** %70
- **Veritabanı:** %0

## Sonuç

Sprint 2 başarıyla tamamlandı. Temel sistem altyapısı hazır, kullanıcı arayüzü responsive ve modern. Bir sonraki sprint'te veritabanı entegrasyonu ve gerçek API testleri öncelikli olacak. 

</details>

<details>
<summary> <h3> SPRINT 3 NOTLARI </h3> </summary>

- **Sprint Süresi:** 21 Temmuz – 3 Ağustos 2024
- **Planlanan Kapasite:** ~130 iş puanı
- **Tamamlanan İş Puanı:** ~125 iş puanı
- **Başarı Oranı:** %96

---

### Tamamlanan Çalışmalar

#### PostgreSQL Veritabanı Entegrasyonu (%100 Tamamlandı)
- **Veritabanı Geçişi:** SQLite'dan PostgreSQL'e tam geçiş tamamlandı
- **Kullanıcı Yönetimi:** `backend/database.py` ile kapsamlı veritabanı modelleri
- **Kimlik Doğrulama:** `backend/auth.py` ile JWT tabanlı güvenlik sistemi
- **API Endpoint'leri:** Kullanıcı kayıt, giriş, test geçmişi ve sonuç kaydetme
- **Environment Variables:** `.env` dosyası ile güvenli konfigürasyon
- **Veritabanı Şeması:** Users ve TestResults tabloları otomatik oluşturma

#### Google Gemini AI Entegrasyonu (%100 Tamamlandı)
- **AI Chatbot:** `src/utils/ai.ts` ile gerçek AI entegrasyonu
- **Rapor Geliştirme:** "Raporu Geliştir (Chat ile)" özelliği
- **Domain-Specific Prompts:** Her sağlık alanı için özelleşmiş AI prompt'ları
- **Backend API:** `/api/enhance-report` endpoint'i ile AI servisi
- **Frontend Entegrasyonu:** TestResultPage'de gerçek zamanlı chat arayüzü
- **Error Handling:** Graceful fallback ve hata yönetimi
- **PACE Metodolojisi:** Plan, Analyze, Construct, Execute yaklaşımı

#### Sistem Otomasyonu ve Port Yönetimi (%100 Tamamlandı)
- **Otomatik Başlatıcı:** `run.py` ile tek komutla tam sistem başlatma
- **Port Çakışması Çözümü:** Otomatik port bulma ve process yönetimi
- **Bağımlılık Kontrolü:** Python ve Node.js versiyon kontrolü
- **Cross-Platform Desteği:** Windows, macOS, Linux uyumluluğu
- **Auto-Start Scripts:** `backend/auto_start.py` ve `start.sh` ile otomasyon
- **Health Check:** Sistem durumu ve bağımlılık kontrolü

#### Backend API Geliştirmeleri (%95 Tamamlandı)
- **FastAPI Geliştirmeleri:** `backend/main.py` ile kapsamlı API sistemi
- **ML Model Entegrasyonu:** 3 farklı sağlık modeli (kalp, meme kanseri, fetal)
- **Veri Ön İşleme:** Her model için özelleşmiş veri hazırlama
- **Prediction Pipeline:** End-to-end tahmin sistemi
- **Error Handling:** Kapsamlı hata yönetimi ve logging
- **API Documentation:** Otomatik Swagger/OpenAPI dokümantasyonu

#### Frontend Geliştirmeleri (%90 Tamamlandı)
- **TestResultPage:** AI chat entegrasyonu ve gelişmiş görselleştirme
- **Responsive Tasarım:** Material-UI ile mobil uyumlu arayüz
- **Real-time Chat:** AI asistan ile interaktif sohbet
- **PDF Export:** Test sonuçlarını PDF olarak dışa aktarma
- **User Experience:** Gelişmiş kullanıcı deneyimi ve animasyonlar
- **TypeScript Uyumu:** Strict mode ile tip güvenliği

---

### Sprint 3 Görsel Belgeleri

#### Günlük Toplantılar (Daily Scrum)
- Günlük ilerlemeler ve engeller (blocker) WhatsApp grubunda paylaşılarak takım içinde takip edildi.
- [WhatsApp görsellerine git](./sprintThree/wp_ss)

#### Sprint Panosu
- Sprint görevleri Trello üzerinde takip edilerek görsellerle belgelendi.
- [Trello görsellerine git](./sprintThree/trello_ss)

#### Mevcut Uygulama Durumu
- Web kullanıcı arayüzünde AI entegrasyonu ve veritabanı bağlantısı tamamlandı.
- Makine öğrenmesi API'leri ve AI chatbot sistemi aktif.
- [Web videosuna git](https://youtu.be/zq_dMn7zZEQ)

---

### Teknik Detaylar

#### PostgreSQL Veritabanı Yapısı
```python
# backend/database.py
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    name = Column(String(255), nullable=False)
    password_hash = Column(String(255), nullable=False)
    user_type = Column(String(50), default="patient")
    created_at = Column(DateTime, default=datetime.utcnow)

class TestResult(Base):
    __tablename__ = "test_results"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    test_type = Column(String(100), nullable=False)
    risk_score = Column(Float, nullable=False)
    risk_level = Column(String(50), nullable=False)
    form_data = Column(Text)  # JSON formatında
    created_at = Column(DateTime, default=datetime.utcnow)
```

#### Gemini AI Entegrasyonu
```typescript
// src/utils/ai.ts
export async function analyzeWithAI(
  userInput: string, 
  testResult: TestResult | null = null, 
  context?: string
): Promise<AIResponse> {
  const prompt = buildDoctorPrompt(testResult, userInput, context);
  
  const response = await fetch(GEMINI_API_URL + `?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      }
    })
  });
  
  return parseAIResponse(aiResponse);
}
```

#### Otomatik Sistem Başlatıcı
```python
# run.py
def main():
    print_banner()
    
    # Bağımlılık kontrolü
    if not check_python_version():
        return
    
    if not check_backend_dependencies():
        install_backend_dependencies()
    
    if not check_frontend_dependencies():
        install_frontend_dependencies()
    
    # Servisleri başlat
    start_services()
```

---

### Test Edilen Özellikler

#### Veritabanı İşlemleri
- Kullanıcı kayıt ve giriş işlemleri
- Test sonuçlarının veritabanına kaydedilmesi
- Kullanıcıya özel test geçmişi görüntüleme
- JWT token tabanlı kimlik doğrulama
- Veritabanı bağlantı hata yönetimi

#### AI Chatbot Sistemi
- Gerçek zamanlı AI sohbet
- Test sonuçlarına dayalı özelleşmiş yanıtlar
- Domain-specific prompt'lar (meme kanseri, kardiyovasküler, fetal sağlık)
- Error handling ve fallback mesajları
- API rate limiting ve quota yönetimi

#### Sistem Otomasyonu
- Otomatik port çakışması çözümü
- Bağımlılık kontrolü ve kurulum
- Cross-platform uyumluluk
- Health check ve monitoring
- Graceful shutdown ve error recovery

#### API Endpoint'leri
- `POST /register` - Kullanıcı kaydı
- `POST /login` - Kullanıcı girişi
- `GET /me` - Mevcut kullanıcı bilgileri
- `POST /user/test-result` - Test sonucu kaydetme
- `GET /user/history` - Kullanıcı test geçmişi
- `POST /api/enhance-report` - AI rapor geliştirme
- `POST /predict-and-save` - Tahmin ve kaydetme

---

### Eksik Kalan İşler

#### Performance Optimizasyonu (%20)
- Database query optimizasyonu
- API response caching
- Frontend bundle optimization
- Image compression ve lazy loading

#### Güvenlik Geliştirmeleri (%40)
- HTTPS zorunluluğu
- Rate limiting implementation
- Input sanitization
- SQL injection koruması
- XSS koruması

#### Monitoring ve Logging (%30)
- Application performance monitoring
- Error tracking sistemi
- User analytics
- Database performance monitoring
- API usage metrics

---

### Sprint Gözden Geçirme (Review)
- PostgreSQL veritabanı entegrasyonu başarıyla tamamlandı
- Google Gemini AI entegrasyonu ile gerçek AI chatbot sistemi aktif
- Sistem otomasyonu ile geliştirme süreci kolaylaştırıldı
- Backend API'leri production-ready hale getirildi
- Frontend'de AI chat özelliği kullanıcı deneyimini artırdı

---

### Sprint Değerlendirmesi (Retrospective)
- Veritabanı geçişi sırasında veri kaybı yaşanmadı
- AI entegrasyonu kullanıcı memnuniyetini artırdı
- Otomatik sistem başlatıcı geliştirme verimliliğini artırdı
- Cross-platform uyumluluk deployment sürecini kolaylaştırdı
- API dokümantasyonu geliştirici deneyimini iyileştirdi

---

## Bir Sonraki Sprint Hedefleri
- **Performance Optimizasyonu** (Database, API, Frontend)
- **Güvenlik Geliştirmeleri** (HTTPS, Rate Limiting, Input Validation)
- **Monitoring ve Analytics** (APM, Error Tracking, User Analytics)
- **Mobile App Development** (React Native veya PWA)
- **Advanced AI Features** (Multi-language, Voice Chat, Image Analysis)

---

## Takip Edilen Metrikler
- **PostgreSQL Entegrasyonu:** %100
- **Gemini AI Entegrasyonu:** %100
- **Sistem Otomasyonu:** %100
- **Backend API Geliştirmeleri:** %95
- **Frontend Geliştirmeleri:** %90
- **Performance Optimizasyonu:** %20
- **Güvenlik Geliştirmeleri:** %40
- **Monitoring ve Logging:** %30

## Sonuç

Sprint 3 başarıyla tamamlandı. Proje artık production-ready durumda. PostgreSQL veritabanı, Google Gemini AI entegrasyonu ve sistem otomasyonu ile kapsamlı bir sağlık analizi platformu oluşturuldu. Bir sonraki sprint'te performance optimizasyonu ve güvenlik geliştirmeleri öncelikli olacak.

</details>

---

<details>
<summary> <h3> KURULUM REHBERİ </h3> </summary>

### Ön Gereksinimler

#### 1. Sistem Gereksinimleri
- **Python:** 3.8 veya üzeri
- **Node.js:** 14.0 veya üzeri
- **NPM:** 6.0 veya üzeri
- **PostgreSQL:** 12.0 veya üzeri

#### 2. PostgreSQL Veritabanı Kurulumu

##### Windows için PostgreSQL Kurulumu:
```bash
# 1. PostgreSQL'i indirin ve kurun
# https://www.postgresql.org/download/windows/

# 2. Kurulum sırasında şifrenizi not alın
# 3. pgAdmin'i de kurun (opsiyonel ama önerilen)

# 4. Veritabanını oluşturun
psql -U postgres
CREATE DATABASE medirisk_db;
CREATE USER medirisk_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE medirisk_db TO medirisk_user;
\q
```

##### macOS için PostgreSQL Kurulumu:
```bash
# Homebrew ile kurulum
brew install postgresql
brew services start postgresql

# Veritabanını oluşturun
createdb medirisk_db
psql medirisk_db
CREATE USER medirisk_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE medirisk_db TO medirisk_user;
\q
```

##### Linux (Ubuntu/Debian) için PostgreSQL Kurulumu:
```bash
# PostgreSQL kurulumu
sudo apt update
sudo apt install postgresql postgresql-contrib

# PostgreSQL servisini başlatın
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Veritabanını oluşturun
sudo -u postgres psql
CREATE DATABASE medirisk_db;
CREATE USER medirisk_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE medirisk_db TO medirisk_user;
\q
```

#### 3. Environment Variables (.env) Dosyası

Proje kök dizininde `.env` dosyası oluşturun:

```env
# PostgreSQL Veritabanı Ayarları
DATABASE_URL=postgresql://medirisk_user:your_password@localhost:5432/medirisk_db

# Google Gemini AI API
GEMINI_API_KEY=your_gemini_api_key_here

# JWT Secret Key
JWT_SECRET_KEY=your_jwt_secret_key_here

# Backend Port
BACKEND_PORT=8008

# Frontend Port
FRONTEND_PORT=3001
```

### Kurulum Adımları

#### 1. Projeyi Klonlayın
```bash
git clone https://github.com/busradeveci/YZTA-AI-17.git
cd YZTA-AI-17
```

#### 2. Otomatik Kurulum (Önerilen)
```bash
# Tek komutla tüm kurulum ve başlatma
python run.py
```

#### 3. Manuel Kurulum

##### Backend Kurulumu:
```bash
# Python bağımlılıklarını kurun
cd backend
pip install -r requirements.txt

# Veritabanı tablolarını oluşturun
python database.py

# Backend'i başlatın
python main.py
```

##### Frontend Kurulumu:
```bash
# Node.js bağımlılıklarını kurun
npm install

# Frontend'i başlatın
npm start
```

### Veritabanı Yönetimi

#### Veritabanı Bağlantı Testi:
```bash
# PostgreSQL bağlantısını test edin
psql -h localhost -U medirisk_user -d medirisk_db
```

#### Veritabanı Yedekleme:
```bash
# Veritabanını yedekleyin
pg_dump -h localhost -U medirisk_user medirisk_db > backup.sql

# Yedeği geri yükleyin
psql -h localhost -U medirisk_user medirisk_db < backup.sql
```

#### Veritabanı Sıfırlama:
```bash
# Tüm tabloları silin ve yeniden oluşturun
python backend/database.py --reset
```

### API Dokümantasyonu

Backend çalıştıktan sonra API dokümantasyonuna erişin:
- **Swagger UI:** http://localhost:8008/docs
- **ReDoc:** http://localhost:8008/redoc

### Sorun Giderme

#### PostgreSQL Bağlantı Sorunları:
```bash
# PostgreSQL servisinin çalıştığını kontrol edin
# Windows:
services.msc  # PostgreSQL servisini kontrol edin

# macOS/Linux:
sudo systemctl status postgresql
```

#### Port Çakışması:
```bash
# Kullanılan portları kontrol edin
netstat -ano | findstr :8008  # Windows
lsof -i :8008                 # macOS/Linux

# Portları temizleyin
python backend/port_config.json --clean
```

#### Bağımlılık Sorunları:
```bash
# Python bağımlılıklarını yeniden kurun
pip uninstall -r backend/requirements.txt -y
pip install -r backend/requirements.txt

# Node.js bağımlılıklarını yeniden kurun
rm -rf node_modules package-lock.json
npm install
```

### Production Deployment

#### Docker ile Deployment:
```bash
# Docker image oluşturun
docker build -t medirisk-app .

# Container'ı çalıştırın
docker run -p 8008:8008 -p 3001:3001 medirisk-app
```

#### Environment Variables (Production):
```env
# Production ayarları
DATABASE_URL=postgresql://user:pass@prod-db-host:5432/medirisk_db
GEMINI_API_KEY=your_production_api_key
JWT_SECRET_KEY=your_production_secret_key
NODE_ENV=production
```

### Güvenlik Notları

1. **API Anahtarları:** `.env` dosyasını asla git'e commit etmeyin
2. **Veritabanı Şifreleri:** Güçlü şifreler kullanın
3. **JWT Secret:** En az 32 karakter uzunluğunda rastgele string kullanın
4. **HTTPS:** Production'da mutlaka HTTPS kullanın

### Destek

Kurulum sorunları için:
- [GitHub Issues](https://github.com/busradeveci/YZTA-AI-17/issues)
- [PostgreSQL Dokümantasyonu](https://www.postgresql.org/docs/)
- [FastAPI Dokümantasyonu](https://fastapi.tiangolo.com/)

</details>