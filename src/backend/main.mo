import Types "types/sugarcane-prediction";
import PredictionMixin "mixins/sugarcane-prediction-api";
import Migration "migration";
import List "mo:core/List";

(with migration = Migration.run)
actor {
  let predictions = List.empty<Types.PredictionRecord>();

  include PredictionMixin(predictions);
};
