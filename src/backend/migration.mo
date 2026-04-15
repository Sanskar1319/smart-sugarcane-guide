import Types "types/sugarcane-prediction";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";

module {
  // Old types defined inline (from .old/src/backend/types/sugarcane-prediction.mo)
  type OldPredictionRecord = {
    id : Text;
    timestamp : Int;
    temperature : Float;
    humidity : Float;
    rainfall : Float;
    soilType : Text;
    result : Text;
    plantingTime : Text;
    fertilizerSuggestion : Text;
    generalGuidance : Text;
  };

  type OldActor = {
    predictions : List.List<OldPredictionRecord>;
    var nextId : Nat;
  };

  type NewActor = {
    predictions : List.List<Types.PredictionRecord>;
  };

  public func run(old : OldActor) : NewActor {
    let newPredictions = List.empty<Types.PredictionRecord>();
    var idx : Nat = 0;
    old.predictions.forEach(func(r : OldPredictionRecord) {
      let newRecord : Types.PredictionRecord = {
        id = idx;
        timestamp = r.timestamp;
        owner = Principal.anonymous();
        input = {
          temperature = r.temperature;
          humidity = r.humidity;
          rainfall = r.rainfall;
          soilType = r.soilType;
        };
        result = r.result;
        plantingTime = r.plantingTime;
        fertilizerSuggestion = r.fertilizerSuggestion;
        generalGuidance = r.generalGuidance;
      };
      newPredictions.add(newRecord);
      idx += 1;
    });
    { predictions = newPredictions };
  };
};
