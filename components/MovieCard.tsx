import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

type MovieCardProps = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date?: string;
  popularity?: number;
  adult?: boolean;
};

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  release_date,
  popularity,
  adult,
}: MovieCardProps) => {
  const year = release_date?.split("-")[0];
  const rating = Math.round(vote_average * 10) / 10;
  const getRatingColor = () => {
    if (vote_average >= 8) return "#10b981";
    if (vote_average >= 6) return "#f59e0b";
    return "#ef4444";
  };

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.75} className="w-[30%] mb-4">
        {/* Poster Container */}
        <View className="relative">
          {/* Poster Image */}
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/500x750/1a1a1a/ffffff.png",
            }}
            className="w-full h-56 rounded-2xl"
            resizeMode="cover"
          />

          {/* Shadow & Glow Effect */}
          <View className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/40" />

          {/* Enhanced Rating Badge */}
          <View
            className="absolute top-3 right-3 px-3 py-2 rounded-lg flex-row items-center gap-1"
            style={{
              backgroundColor: getRatingColor(),
              shadowColor: getRatingColor(),
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.4,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <Image source={icons.star} className="w-4 h-4" />
            <Text className="text-xs text-white font-bold">{rating}</Text>
          </View>

          {/* Adult Badge */}
          {adult && (
            <View
              className="absolute top-3 left-3 bg-red-600 px-2.5 py-1.5 rounded-lg shadow-lg"
              style={{
                shadowColor: "#dc2626",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <Text className="text-[11px] text-white font-bold tracking-wide">
                18+
              </Text>
            </View>
          )}

          {/* Hover Overlay (optional visual feedback) */}
          <View className="absolute inset-0 rounded-2xl bg-white/0 active:bg-white/5" />
        </View>

        {/* Info Section */}
        <View className="mt-3">
          <Text
            className="text-white font-bold text-sm leading-5"
            numberOfLines={1}
          >
            {title}
          </Text>

          <View className="mt-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-1">
              <View className="w-1 h-1 bg-light-400 rounded-full" />
              <Text className="text-xs text-white">{year ?? "—"}</Text>
            </View>

            {vote_count > 0 && (
              <View className="flex-row items-center gap-1">
                <Image source={icons.star} className="w-3 h-3" />
                <Text className="text-xs text-light-400">
                  {vote_count > 1000
                    ? `${(vote_count / 1000).toFixed(1)}K`
                    : vote_count}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
