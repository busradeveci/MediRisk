import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Paper,
  Chip,
  Avatar,
  CircularProgress
} from '@mui/material';

import {
  PlayArrow,
  Visibility,
  Download
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { healthTests, mockTestResults } from '../utils/mockData';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [testHistory, setTestHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTests: 0,
    completedTests: 0,
    pendingTests: 0,
    averageScore: 0
  });

  // Test geçmişini çek
  const fetchTestHistory = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:8000/user/history', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTestHistory(data);
        calculateStats(data);
      } else {
        console.error('Test geçmişi alınamadı:', response.status);
        // Fallback olarak mock data kullan
        setTestHistory(mockTestResults);
        calculateStats(mockTestResults);
      }
    } catch (error) {
      console.error('Test geçmişi çekme hatası:', error);
      // Fallback olarak mock data kullan
      setTestHistory(mockTestResults);
      calculateStats(mockTestResults);
    } finally {
      setLoading(false);
    }
  };

  // İstatistikleri hesapla
  const calculateStats = (tests: any[]) => {
    const totalTests = tests.length;
    const completedTests = tests.filter(test => test.risk_score !== null && test.risk_score !== undefined).length;
    const pendingTests = totalTests - completedTests;
    
    const completedTestsWithScore = tests.filter(test => test.risk_score !== null && test.risk_score !== undefined);
    const averageScore = completedTestsWithScore.length > 0 
      ? Math.round((completedTestsWithScore.reduce((sum, test) => sum + test.risk_score, 0) / completedTestsWithScore.length) * 10) / 10
      : 0;

    setStats({
      totalTests,
      completedTests,
      pendingTests,
      averageScore
    });
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
      fetchTestHistory();
    } else {
      navigate('/login');
    }
  }, [navigate]);



  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };

  const getRiskText = (risk: string) => {
    switch (risk) {
      case 'low': return 'Düşük';
      case 'medium': return 'Orta';
      case 'high': return 'Yüksek';
      default: return 'Bilinmiyor';
    }
  };

  if (!user) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
        backgroundColor: '#FFFFFF', // Arka plan rengi kırık beyaz yapıldı
        minHeight: '100vh',
        fontFamily: 'Inter, Arial, sans-serif',
        fontSize: '12px',
      }}
    >
      {/* Hoş Geldin Mesajı */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: 'Manrope, Arial, sans-serif',
            fontWeight: 700,
            color: '#0F3978',
            fontSize: '2.2rem',
            letterSpacing: '-0.5px',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* İsteğe bağlı ikon */}
          {/* <img src={dashboardIcon} alt="" style={{ width: 48, height: 48, objectFit: 'contain' }} /> */}
          Hoş geldin, {user.name}!
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 400,
            color: '#4787E6',
            fontSize: '1.1rem',
            mb: 1,
            userSelect: 'none',
          }}
        >
          Sağlık durumunuzu takip etmek ve risk analizi yapmak için hazırız.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Ana İçerik */}
        <Box>
          {/* İstatistikler */}
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 4,
              background: '#F8FBFF', // Kutucukların arka planı hafif kırık beyaz
              border: '1.5px solid #E0E7EF', // Kenar belirgin ve hafif kırık beyaz
              boxShadow: '0 4px 24px 0 rgba(30, 89, 174, 0.10)', // Daha belirgin gölge
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: 'Manrope, Arial, sans-serif',
                fontWeight: 600,
                color: '#1B69DE',
                mb: 3,
                fontSize: '1.15rem',
                userSelect: 'none',
              }}
            >
              Genel İstatistikler
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#0ED1B1', fontFamily: 'Manrope, Arial, sans-serif', fontSize: '2rem' }}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : stats.totalTests}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '12px' }}>
                  Toplam Test
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B69DE', fontFamily: 'Manrope, Arial, sans-serif', fontSize: '2rem' }}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : stats.completedTests}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '12px' }}>
                  Tamamlanan
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#F9A825', fontFamily: 'Manrope, Arial, sans-serif', fontSize: '2rem' }}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : stats.pendingTests}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '12px' }}>
                  Bekleyen
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#4787E6', fontFamily: 'Manrope, Arial, sans-serif', fontSize: '2rem' }}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : stats.averageScore}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '12px' }}>
                  Ortalama Skor
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Test Kartları */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontFamily: 'Manrope, Arial, sans-serif',
              fontWeight: 600,
              color: '#0F3978',
              mb: 3,
              fontSize: '1.4rem',
              userSelect: 'none',
            }}
          >
            Mevcut Testler
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 4 }}>
            {healthTests.map((test) => (
              <Card
                key={test.id}
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  background: '#F8FBFF', // Kutucukların arka planı hafif kırık beyaz
                  border: '1.5px solid #E0E7EF', // Kenar belirgin ve hafif kırık beyaz
                  boxShadow: '0 4px 24px 0 rgba(30, 89, 174, 0.10)', // Daha belirgin gölge
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: '0 12px 32px 0 rgba(14,209,177,0.13)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      <img
                        src={test.icon}
                        alt={test.name}
                        style={{
                          width: 48,
                          height: 48,
                          objectFit: 'contain',
                          display: 'inline-block'
                        }}
                        draggable={false}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" component="h3" sx={{
                        fontWeight: 600,
                        fontFamily: 'Manrope, Arial, sans-serif',
                        color: '#0F3978'
                      }}>
                        {test.name}
                      </Typography>
                      <Chip
                        label={test.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '11px'
                        }}
                      />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{
                    mb: 3,
                    fontFamily: 'Inter, Arial, sans-serif',
                    fontSize: '12px'
                  }}>
                    {test.description}
                  </Typography>
                  {/* Test Metrikleri */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                      mb: 1,
                      fontFamily: 'Inter, Arial, sans-serif',
                      fontSize: '12px'
                    }}>
                      Test Metrikleri:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {test.fields.slice(0, 4).map((field) => (
                        <Chip
                          key={field.name}
                          label={field.label}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem', fontFamily: 'Inter, Arial, sans-serif' }}
                        />
                      ))}
                      {test.fields.length > 4 && (
                        <Chip
                          label={`+${test.fields.length - 4} daha`}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem', fontFamily: 'Inter, Arial, sans-serif' }}
                        />
                      )}
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<PlayArrow />}
                    onClick={() => navigate(`/test/${test.id}`)}
                    sx={{
                      fontWeight: 600,
                      fontFamily: 'Manrope, Arial, sans-serif',
                      fontSize: '1rem',
                      background: 'linear-gradient(90deg, #0ED1B1 0%, #1B69DE 100%)',
                      color: '#fff',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px 0 rgba(14,209,177,0.08)',
                      transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #1B69DE 0%, #0ED1B1 100%)',
                        boxShadow: '0 4px 16px 0 rgba(27,105,222,0.12)',
                        transform: 'translateY(-2px) scale(1.03)'
                      }
                    }}
                  >
                    Teste Başla
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* Son Test Sonuçları */}
          {testHistory.length > 0 && (
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 4,
                background: '#F8FBFF',
                border: '1.5px solid #E0E7EF',
                boxShadow: '0 4px 24px 0 rgba(30, 89, 174, 0.10)',
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: 'Manrope, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#1B69DE',
                  mb: 3,
                  fontSize: '1.15rem',
                  userSelect: 'none',
                }}
              >
                Son Test Sonuçları
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                {testHistory.slice(0, 2).map((result) => {
                  const test = healthTests.find(t => t.id === result.test_type);
                  return (
                    <Card key={result.id} variant="outlined" sx={{
                      borderRadius: 3,
                      background: '#F8FBFF',
                      border: '1.5px solid #E0E7EF',
                      boxShadow: '0 4px 24px 0 rgba(30, 89, 174, 0.10)',
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6" sx={{
                            fontWeight: 600,
                            fontFamily: 'Manrope, Arial, sans-serif',
                            color: '#0F3978'
                          }}>
                            {test?.name}
                          </Typography>
                          <Chip
                            label={getRiskText(result.risk_level)}
                            color={getRiskColor(result.risk_level) as any}
                            size="small"
                            sx={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '11px' }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{
                          mb: 2,
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '12px'
                        }}>
                          Skor: {result.risk_score}/100
                        </Typography>
                        <Typography variant="body2" sx={{
                          mb: 2,
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '12px'
                        }}>
                          {result.message}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            size="small"
                            startIcon={<Visibility />}
                            variant="outlined"
                            sx={{
                              fontFamily: 'Manrope, Arial, sans-serif',
                              fontWeight: 600,
                              fontSize: '12px',
                              color: '#1B69DE',
                              borderColor: '#1B69DE',
                              '&:hover': {
                                background: '#EAF3FA',
                                borderColor: '#0ED1B1',
                                color: '#0ED1B1'
                              }
                            }}
                          >
                            Görüntüle
                          </Button>
                          <Button
                            size="small"
                            startIcon={<Download />}
                            variant="outlined"
                            sx={{
                              fontFamily: 'Manrope, Arial, sans-serif',
                              fontWeight: 600,
                              fontSize: '12px',
                              color: '#0F3978',
                              borderColor: '#0F3978',
                              '&:hover': {
                                background: '#EAF3FA',
                                borderColor: '#0ED1B1',
                                color: '#0ED1B1'
                              }
                            }}
                          >
                            PDF İndir
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            </Paper>
          )}
        </Box>


      </Box>
    </Container>
  );
};

export default DashboardPage;