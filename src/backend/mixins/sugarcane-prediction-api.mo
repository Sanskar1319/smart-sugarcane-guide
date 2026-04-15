import Types "../types/sugarcane-prediction";
import PredictionLib "../lib/sugarcane-prediction";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (
  predictions : List.List<Types.PredictionRecord>,
) {
  /// Evaluate input, store record, return the saved PredictionRecord.
  public shared ({ caller }) func savePrediction(
    input : Types.PredictionInput
  ) : async Types.PredictionRecord {
    let id = predictions.size();
    let record = PredictionLib.evaluate(input, id, Time.now(), caller);
    predictions.add(record);
    record;
  };

  /// Return all predictions for the caller sorted by timestamp descending.
  public query ({ caller }) func getPredictions() : async [Types.PredictionRecord] {
    PredictionLib.getAll(predictions, caller);
  };

  /// Delete a prediction by id. Returns true on success, false if not found.
  public shared ({ caller }) func deletePrediction(id : Nat) : async Bool {
    PredictionLib.remove(predictions, id, caller);
  };
};
