import i18nJSON from "../i18n/en_US.json";
import { getRecommendations } from "../data/recommendations";
import { useNavigate } from "react-router-dom";

export default function GetRecommendationsContent(navPath) {
  let navigate = useNavigate();
  let recommendations = getRecommendations(navPath);
  let i18n = JSON.parse(JSON.stringify(i18nJSON));
  return (
    <main>
      <div class="recommendation-container">
        {recommendations.map((item, index) => (
          <div>
            <h3>Recommendation {index + 1}</h3>
            <br />
            <p>
              Based on your history, we found that you have last viewed {"  "}
              {i18n?.routes[item] ? `"${i18n.routes[item]}"` : item}.
            </p>
            <p>
              Would you like to view {"  "}
              {i18n?.routes[item] ? i18n.routes[item] : item}?
            </p>
            <br />
            <button
              onClick={() => {
                return navigate(`/${navPath}/${item}`);
              }}
            >
              {" "}
              View {i18n?.routes[item] ? i18n.routes[item] : item}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
