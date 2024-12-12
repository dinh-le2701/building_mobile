import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BannerHeight = 180;

const Banner = ({ banners, duration = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateXAnim = useRef(new Animated.Value(width)).current; 

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % banners.length; 
            startAnimation(nextIndex);
        }, duration);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const startAnimation = (nextIndex) => {
        translateXAnim.setValue(width); 
        Animated.timing(translateXAnim, {
            toValue: 0, 
            duration: 500, 
            useNativeDriver: true,
        }).start(() => {
            setCurrentIndex(nextIndex); 
        });
    };

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.bannerContainer,
                    {
                        transform: [{ translateX: translateXAnim }],
                    },
                ]}
            >
                <Image source={banners[currentIndex].img} style={styles.bannerImage} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: BannerHeight,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', 
        marginTop: 20,
        borderRadius: 10,
        marginBottom: 30
    },
    bannerContainer: {
        width: width,
        height: BannerHeight,
        position: 'absolute',

    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 15, 
    },
});

export default Banner;
