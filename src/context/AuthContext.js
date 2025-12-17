import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Auth Context oluştur
const AuthContext = createContext({});

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Uygulama açıldığında kullanıcı bilgilerini kontrol et
    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const userData = await AsyncStorage.getItem('@user');
            if (userData) {
                setUser(JSON.parse(userData));
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Error checking user:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Giriş fonksiyonu
    const login = async (email, password) => {
        try {
            // TODO: Burada gerçek API çağrısı yapılacak
            // Örnek: const response = await fetch('YOUR_API/login', {...})

            // Şimdilik mock data kullanıyoruz
            const mockUser = {
                id: '1',
                email: email,
                name: 'Test Kullanıcı',
                avatar: 'https://i.pravatar.cc/150?img=1',
            };

            // Kullanıcı bilgilerini kaydet
            await AsyncStorage.setItem('@user', JSON.stringify(mockUser));
            setUser(mockUser);
            setIsLoggedIn(true);

            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        }
    };

    // Kayıt fonksiyonu
    const register = async (name, email, password) => {
        try {
            // TODO: Burada gerçek API çağrısı yapılacak
            // Örnek: const response = await fetch('YOUR_API/register', {...})

            // Şimdilik mock data kullanıyoruz
            const mockUser = {
                id: Date.now().toString(),
                email: email,
                name: name,
                avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70),
            };

            // Kullanıcı bilgilerini kaydet
            await AsyncStorage.setItem('@user', JSON.stringify(mockUser));
            setUser(mockUser);
            setIsLoggedIn(true);

            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Register error:', error);
            return { success: false, error: error.message };
        }
    };

    // Çıkış fonksiyonu
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('@user');
            setUser(null);
            setIsLoggedIn(false);
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false, error: error.message };
        }
    };

    // Şifre sıfırlama
    const resetPassword = async (email) => {
        try {
            // TODO: Burada gerçek API çağrısı yapılacak
            console.log('Password reset requested for:', email);
            return { success: true, message: 'Şifre sıfırlama linki e-postanıza gönderildi.' };
        } catch (error) {
            console.error('Reset password error:', error);
            return { success: false, error: error.message };
        }
    };

    // Kullanıcı bilgilerini güncelle
    const updateUser = async (userData) => {
        try {
            const updatedUser = { ...user, ...userData };
            await AsyncStorage.setItem('@user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            return { success: true, user: updatedUser };
        } catch (error) {
            console.error('Update user error:', error);
            return { success: false, error: error.message };
        }
    };

    const value = {
        user,
        isLoggedIn,
        isLoading,
        login,
        register,
        logout,
        resetPassword,
        updateUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook - Auth context'i kullanmak için
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
