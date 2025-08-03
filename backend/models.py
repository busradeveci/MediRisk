from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# Kullanıcı modelleri
class UserCreate(BaseModel):
    email: str
    name: str
    password: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    email: str
    name: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None
    user_type: str
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

# Test sonuç modelleri
class TestResultCreate(BaseModel):
    test_type: str
    risk_score: float
    risk_level: str
    message: str
    recommendations: List[str]
    form_data: dict

class TestResultResponse(BaseModel):
    id: int
    user_id: int
    test_type: str
    risk_score: float
    risk_level: str
    message: str
    recommendations: List[str]
    form_data: dict
    created_at: datetime

    class Config:
        from_attributes = True

# Sağlık test modelleri (mevcut)
class HealthTestRequest(BaseModel):
    test_type: str
    form_data: dict

class HealthTestResponse(BaseModel):
    risk: str
    score: float
    message: str
    recommendations: List[str]
    timestamp: datetime
    confidence: Optional[float] = None
    model_info: Optional[dict] = None 