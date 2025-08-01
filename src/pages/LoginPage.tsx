import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Link,
  Card,
  CardContent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import loginIcon from '../images/login.png';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    try {
      console.log('Login isteği gönderiliyor...', formData.email);
      
      // Backend API'sine giriş isteği gönder
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      console.log('Login response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Login response data:', data);
        
        // Token'ı localStorage'a kaydet
        localStorage.setItem('token', data.access_token);
        
        // Backend'den gelen user bilgilerini kullan
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          console.log('Kullanıcı bilgileri kaydedildi:', data.user);
          navigate('/dashboard');
        } else {
          // Eğer user bilgileri response'da yoksa /me endpoint'inden al
          const userResponse = await fetch('http://localhost:8000/me', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${data.access_token}`,
              'Content-Type': 'application/json',
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('Kullanıcı bilgileri /me endpoint\'inden alındı:', userData);
            navigate('/dashboard');
          } else {
            console.error('Kullanıcı bilgileri alınamadı:', userResponse.status);
            setError('Kullanıcı bilgileri alınamadı. Lütfen tekrar deneyin.');
          }
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Login hatası:', errorData);
        setError(errorData.detail || 'Geçersiz e-posta veya şifre.');
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      setError('Sunucu bağlantısında sorun oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#E8F4FD',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: '12px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Logo ve MediRisk Yazısı - Responsive */}
      <Box sx={{
        display: { xs: 'none', md: 'flex' }, // Mobilde gizle, desktop'ta göster
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'fixed',
        top: { md: '10vh', lg: '8vh' }, // Yukarıdan boşluk
        left: 32,
        userSelect: 'none',
        zIndex: 10,
      }}>
        <Box
          sx={{
            width: { md: 200, lg: 250 },
            height: { md: 200, lg: 250 },
            cursor: 'default',
            mb: -2,
          }}
        >
          <img
            src={loginIcon}
            alt="MediRisk Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'transparent',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: 'Manrope, Arial, sans-serif',
            fontWeight: 700,
            color: '#0F3978',
            fontSize: { md: '2.2rem', lg: '2.8rem' },
            letterSpacing: '-0.5px',
            userSelect: 'none',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          MediRisk
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 400,
            color: '#4787E6',
            fontSize: { md: '0.75rem', lg: '0.85rem' },
            userSelect: 'none',
            marginTop: '-2px',
          }}
        >
          Geleceğin Sağlığı, Bugünün Analizi
        </Typography>
      </Box>

      {/* Mobil Logo - Sadece mobilde göster */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        userSelect: 'none',
        zIndex: 10,
      }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            cursor: 'default',
            mb: 1,
          }}
        >
          <img
            src={loginIcon}
            alt="MediRisk Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              backgroundColor: 'transparent',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </Box>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: 'Manrope, Arial, sans-serif',
            fontWeight: 700,
            color: '#0F3978',
            fontSize: '1.6rem',
            letterSpacing: '-0.5px',
            userSelect: 'none',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          MediRisk
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 400,
            color: '#4787E6',
            fontSize: '0.7rem',
            userSelect: 'none',
            textAlign: 'center',
          }}
        >
          Geleceğin Sağlığı, Bugünün Analizi
        </Typography>
      </Box>

      {/* Hasta Girişi Kutusu - Responsive */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Her zaman ortala
          minHeight: '100vh',
          width: { xs: '90%', sm: 500, md: 600, lg: 700 }, // Sabit genişlik
          maxWidth: '100%',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 12, md: '5vh' }, // Masaüstünde yukarıdan boşluk
          pb: { xs: 4, md: '5vh' }, // Masaüstünde aşağıdan boşluk
          mt: { xs: 8, md: 0 }, // Mobilde logo için boşluk
          mx: 'auto', // Her zaman yatayda ortala
        }}
      >
        {/* Login Kart */}
        <Card
          elevation={16}
          sx={{
            borderRadius: 4,
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 4, sm: 5, md: 6 },
            background: '#fff',
            boxShadow: '0 12px 40px 0 rgba(14,209,177,0.13)',
            width: '100%',
            transition: 'box-shadow 0.3s, transform 0.3s',
            '&:hover': {
              boxShadow: '0 16px 50px 0 rgba(14,209,177,0.20)',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontFamily: 'Manrope, Arial, sans-serif',
                fontWeight: 650, 
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 3, md: 4 },
                color: '#0F3978',
                fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                userSelect: 'none',
                letterSpacing: '-0.5px',
              }}
            >
              Hasta Girişi
            </Typography>
            {error && (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  fontSize: '12px',
                  borderRadius: 2,
                  background: '#FFEAEA',
                  color: '#D32F2F',
                }}
              >
                {error}
              </Alert>
            )}
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <TextField
                fullWidth
                label="E-posta Adresi"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
                sx={{
                  fontSize: '12px',
                  fontFamily: 'Inter, Arial, sans-serif',
                  '& .MuiInputBase-root': {
                    borderRadius: 3,
                    background: '#F8FBFF',
                    fontSize: '12px',
                    transition: 'box-shadow 0.3s ease',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '12px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E0E7EF',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0ED1B1',
                  },
                  '& .MuiInputBase-root.Mui-focused': {
                    boxShadow: '0 0 0 3px #0ED1B133',
                  },
                }}
                InputProps={{
                  style: {
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '12px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '12px',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Şifre"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
                sx={{
                  fontSize: '12px',
                  fontFamily: 'Inter, Arial, sans-serif',
                  '& .MuiInputBase-root': {
                    borderRadius: 3,
                    background: '#F8FBFF',
                    fontSize: '12px',
                    transition: 'box-shadow 0.3s ease',
                  },
                  '& .MuiInputLabel-root': {
                    fontSize: '12px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E0E7EF',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0ED1B1',
                  },
                  '& .MuiInputBase-root.Mui-focused': {
                    boxShadow: '0 0 0 3px #0ED1B133',
                  },
                }}
                InputProps={{
                  style: {
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '12px',
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '12px',
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                startIcon={<Login />}
                sx={{
                  py: 2,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  mb: 2,
                  mt: 1,
                  borderRadius: 3,
                  background: 'linear-gradient(90deg, #0ED1B1 0%, #1B69DE 100%)',
                  color: '#fff',
                  fontFamily: 'Manrope, Arial, sans-serif',
                  letterSpacing: '0.5px',
                  boxShadow: '0 4px 14px 0 rgba(14,209,177,0.25)',
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1B69DE 0%, #0ED1B1 100%)',
                    boxShadow: '0 6px 20px 0 rgba(27,105,222,0.3)',
                  },
                }}
              >
                Giriş Yap
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontSize: '12px',
                  userSelect: 'none',
                }}
              >
                Hesabınız yok mu?{' '}
                <Link
                  href="/register"
                  sx={{
                    fontWeight: 600,
                    color: '#0ED1B1',
                    fontFamily: 'Manrope, Arial, sans-serif',
                    fontSize: '12px',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#1B69DE',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Kayıt Ol
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;