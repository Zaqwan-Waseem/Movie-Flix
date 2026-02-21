import { images } from '@/constants/images'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const savedMovies = [
  {
    id: '1',
    title: 'Inception',
    rating: '8.8',
    image: 'https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg',
  },
  {
    id: '2',
    title: 'Interstellar',
    rating: '8.6',
    image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNM7m8B7z9L2.jpg',
  },
]

export default function SavedMoviesScreen() {
  const renderItem = ({ item }) => (
    <View className="flex-row bg-zinc-900 rounded-2xl p-3 mb-4">
      {/* Poster */}
      <Image source={{ uri: item.image }} className="w-20 h-28 rounded-xl" />

      {/* Movie Info */}
      <View className="flex-1 ml-4 justify-between">
        <View>
          <Text className="text-white text-lg font-semibold">{item.title}</Text>
          <Text className="text-yellow-400 mt-1">⭐ {item.rating}</Text>
        </View>

        <TouchableOpacity className="bg-red-600 px-3 py-2 rounded-lg self-start">
          <Text className="text-white text-sm font-medium">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View className="flex-1 bg-primary px-5 pt-12">
      <Image source={images.bg} className="absolute w-auto z-0" />
      {/* Header */}
      <Text className="text-white text-2xl font-bold mb-6">
        Saved Movies 🎬
      </Text>

      {/* List */}
      <FlatList
        data={savedMovies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
