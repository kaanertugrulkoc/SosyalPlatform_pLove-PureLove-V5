import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Animated,
    Dimensions,
    Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');

export default function LoginScreenAlt({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                tension: 20,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handleLogin = () => {
        console.log('Login attempt:', { email, password });
        // navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            {/* Arka Plan Gradient */}
            <LinearGradient
                colors={['#0f0c29', '#302b63', '#24243e']}
                style={styles.background}
            >
                {/* Dekoratif Elementler */}
                <View style={styles.circle1} />
                <View style={styles.circle2} />
                <View style={styles.circle3} />
            </LinearGradient>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <Animated.View
                    style={[
                        styles.content,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY: slideAnim }],
                        },
                    ]}
                >
                    {/* Logo ve Başlık */}
                    <View style={styles.header}>
                        <View style={styles.logoWrapper}>
                            <LinearGradient
                                colors={['#667eea', '#764ba2']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.logo}
                            >
                                <Ionicons name="planet-outline" size={48} color="#fff" />
                            </LinearGradient>
                        </View>
                        <Text style={styles.appName}>SosyalPlatform</Text>
                        <Text style={styles.tagline}>Dünyaya bağlan, anları paylaş</Text>
                    </View>

                    {/* Giriş Kartı */}
                    <View style={styles.card}>
                        <BlurView intensity={20} tint="dark" style={styles.blurContainer}>
                            <Text style={styles.cardTitle}>Giriş Yap</Text>

                            {/* Email Input */}
                            <View style={styles.inputWrapper}>
                                <View style={styles.inputIconContainer}>
                                    <Ionicons name="mail" size={20} color="#667eea" />
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-posta adresiniz"
                                    placeholderTextColor="rgba(255,255,255,0.5)"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>

                            {/* Password Input */}
                            <View style={styles.inputWrapper}>
                                <View style={styles.inputIconContainer}>
                                    <Ionicons name="lock-closed" size={20} color="#667eea" />
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Şifreniz"
                                    placeholderTextColor="rgba(255,255,255,0.5)"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeButton}
                                >
                                    <Ionicons
                                        name={showPassword ? 'eye' : 'eye-off'}
                                        size={20}
                                        color="rgba(255,255,255,0.6)"
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* Şifremi Unuttum */}
                            <TouchableOpacity style={styles.forgotButton}>
                                <Text style={styles.forgotText}>Şifremi Unuttum</Text>
                            </TouchableOpacity>

                            {/* Giriş Butonu */}
                            <TouchableOpacity
                                style={styles.loginButton}
                                onPress={handleLogin}
                                activeOpacity={0.9}
                            >
                                <LinearGradient
                                    colors={['#667eea', '#764ba2']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.loginGradient}
                                >
                                    <Text style={styles.loginButtonText}>Giriş Yap</Text>
                                    <Ionicons name="arrow-forward" size={20} color="#fff" />
                                </LinearGradient>
                            </TouchableOpacity>

                            {/* Divider */}
                            <View style={styles.divider}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>veya devam et</Text>
                                <View style={styles.dividerLine} />
                            </View>

                            {/* Sosyal Giriş */}
                            <View style={styles.socialButtons}>
                                <TouchableOpacity style={styles.socialButton}>
                                    <LinearGradient
                                        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                                        style={styles.socialGradient}
                                    >
                                        <Ionicons name="logo-google" size={24} color="#fff" />
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.socialButton}>
                                    <LinearGradient
                                        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                                        style={styles.socialGradient}
                                    >
                                        <Ionicons name="logo-facebook" size={24} color="#fff" />
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.socialButton}>
                                    <LinearGradient
                                        colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
                                        style={styles.socialGradient}
                                    >
                                        <Ionicons name="logo-apple" size={24} color="#fff" />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </BlurView>
                    </View>

                    {/* Kayıt Ol */}
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Hesabınız yok mu? </Text>
                        <TouchableOpacity>
                            <Text style={styles.signupLink}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    circle1: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        top: -100,
        right: -100,
    },
    circle2: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(118, 75, 162, 0.1)',
        bottom: -50,
        left: -50,
    },
    circle3: {
        position: 'absolute',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(240, 147, 251, 0.1)',
        top: height / 2,
        left: width - 100,
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoWrapper: {
        marginBottom: 16,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#667eea',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 12,
    },
    appName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    tagline: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '400',
    },
    card: {
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    blurContainer: {
        padding: 24,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
        height: 56,
    },
    inputIconContainer: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        paddingRight: 16,
    },
    eyeButton: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: '600',
    },
    loginButton: {
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 24,
        shadowColor: '#667eea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },
    loginGradient: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        gap: 8,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    dividerText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 12,
        paddingHorizontal: 12,
        fontWeight: '500',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
    },
    socialButton: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    socialGradient: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
    },
    signupLink: {
        color: '#667eea',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
