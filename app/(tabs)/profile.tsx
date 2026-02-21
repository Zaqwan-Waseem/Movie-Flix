import { images } from '@/constants/images'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="px-5 pt-12">
        {/* Profile Header */}
        <View className="items-center">
          <Image
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/149/149071.png`,
            }}
            className="w-28 h-28 rounded-full border-4 border-yellow-400"
          />
          <Text className="text-white text-2xl font-bold mt-4">
            Zaqwan Waseem
          </Text>
          <Text className="text-gray-400 text-base">Movie Enthusiast 🎬</Text>
        </View>

        {/* Stats Section */}
        <View className="flex-row justify-between mt-8 bg-zinc-900 p-4 rounded-2xl">
          <View className="items-center">
            <Text className="text-yellow-400 text-xl font-bold">120</Text>
            <Text className="text-gray-400">Watched</Text>
          </View>
          <View className="items-center">
            <Text className="text-yellow-400 text-xl font-bold">35</Text>
            <Text className="text-gray-400">Favorites</Text>
          </View>
          <View className="items-center">
            <Text className="text-yellow-400 text-xl font-bold">12</Text>
            <Text className="text-gray-400">Reviews</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View className="mt-8 gap-y-4">
          <TouchableOpacity className="bg-zinc-900 p-4 rounded-xl">
            <Text className="text-white text-lg">🎥 My Watchlist</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-zinc-900 p-4 rounded-xl">
            <Text className="text-white text-lg">⭐ My Favorites</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-zinc-900 p-4 rounded-xl">
            <Text className="text-white text-lg">⚙️ Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-600 p-4 rounded-xl mt-4">
            <Text className="text-white text-lg text-center font-semibold">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
