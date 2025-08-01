from sqlalchemy import create_engine, Column, Integer, String, DateTime, Float, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime
import os
from dotenv import load_dotenv

# .env dosyasını yükle
load_dotenv()

# PostgreSQL veritabanı bağlantı bilgileri
POSTGRES_USER = os.getenv("POSTGRES_USER", "postgres")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "1042")
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "localhost")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5432")
POSTGRES_DB = os.getenv("POSTGRES_DB", "medirisk")

# PostgreSQL veritabanı URL'i
DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"

# Engine oluştur - UTF-8 encoding ile
engine = create_engine(
    DATABASE_URL,
    echo=False,
    pool_pre_ping=True,
    connect_args={"options": "-c client_encoding=utf8"}
)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    name = Column(String(255), nullable=False)
    password_hash = Column(String(255), nullable=False)
    age = Column(Integer)
    gender = Column(String(50))
    phone = Column(String(20))
    user_type = Column(String(50), default="patient")  # patient, doctor
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # İlişki
    test_results = relationship("TestResult", back_populates="user")

class TestResult(Base):
    __tablename__ = "test_results"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    test_type = Column(String(100), nullable=False)  # cardiovascular, fetal_health, breast_cancer
    risk_score = Column(Float, nullable=False)
    risk_level = Column(String(50), nullable=False)  # low, medium, high
    message = Column(Text)
    recommendations = Column(Text)  # JSON string olarak saklanacak
    form_data = Column(Text)  # JSON string olarak saklanacak
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # İlişki
    user = relationship("User", back_populates="test_results")
    
    def get_recommendations_list(self):
        """JSON string'i listeye çevir"""
        try:
            import json
            return json.loads(self.recommendations) if self.recommendations else []
        except:
            return []
    
    def get_form_data_dict(self):
        """JSON string'i dict'e çevir"""
        try:
            import json
            return json.loads(self.form_data) if self.form_data else {}
        except:
            return {}

# Veritabanı tablolarını oluştur
def create_tables():
    Base.metadata.create_all(bind=engine)

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Veritabanını başlat
def init_database():
    try:
        create_tables()
        print("✅ PostgreSQL veritabanı tabloları oluşturuldu")
    except Exception as e:
        print(f"❌ Veritabanı bağlantı hatası: {e}")
        print("PostgreSQL servisinin çalıştığından ve bağlantı bilgilerinin doğru olduğundan emin olun.") 