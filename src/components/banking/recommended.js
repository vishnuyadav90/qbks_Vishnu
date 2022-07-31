import GetRecommendationsContent from "../recommendationsComponent";

export default function Recommended() {
  let recommendations = GetRecommendationsContent("banking");
  return recommendations;
}
