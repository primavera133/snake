import PubSub from "pubsub-js";
import { pubSubEvents, SCORE_PER_FOOD } from "../../config";

export const updateScore = (score: number) => {
  const newScore = (score += SCORE_PER_FOOD);
  PubSub.publish(pubSubEvents.SCORE, newScore);
  return newScore;
};
