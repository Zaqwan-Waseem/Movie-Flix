import { images } from '@/constants/images'
import { fetchMovieDetails } from '@/services/api'
import { useFetch } from '@/services/useFetch'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const MovieDetails = () => {
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const {
    data: movie,
    loading,
    error,
  } = useFetch(() => fetchMovieDetails(id as string))

  if (loading) {
    return (
      <View className="flex-1 bg-primary items-center justify-center">
        <ActivityIndicator size="large" color="#facc15" />
      </View>
    )
  }

  if (!movie) return null

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-5 z-20 bg-black/70 px-4 py-2 rounded-full"
      >
        <Text className="text-white">← Back</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          className="w-full h-[450px]"
          resizeMode="cover"
        />

        <View className="bg-zinc-900 -mt-10 rounded-t-3xl px-6 pt-6 pb-12">
          <Text className="text-white text-3xl font-bold">{movie.title}</Text>

          <View className="flex-row flex-wrap items-center mt-3 gap-4">
            <Text className="text-yellow-400 font-semibold">
              ⭐ {movie.vote_average}
            </Text>
            <Text className="text-gray-400">
              {movie.release_date?.split('-')[0]}
            </Text>
            <Text className="text-gray-400 uppercase">
              {movie.original_language}
            </Text>
          </View>

          <View className="flex-row mt-4 gap-6">
            <Text className="text-gray-300">👥 {movie.vote_count} votes</Text>
            <Text className="text-gray-300">
              🔥 {Math.round(movie.popularity)}
            </Text>
          </View>

          <Text className="text-white text-lg font-semibold mt-6">
            Overview
          </Text>

          <Text className="text-gray-300 mt-2 leading-relaxed">
            {movie.overview}
          </Text>

          <TouchableOpacity className="bg-yellow-400 mt-6 py-4 rounded-xl">
            <Text className="text-black text-center font-bold text-lg">
              Save Movie
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default MovieDetails
