import Types "../types/sugarcane-prediction";
import List "mo:core/List";
import Int "mo:core/Int";
import Principal "mo:core/Principal";

module {
  public type PredictionInput = Types.PredictionInput;
  public type PredictionRecord = Types.PredictionRecord;

  /// Evaluate suitability and build a full PredictionRecord.
  public func evaluate(
    input : PredictionInput,
    id : Nat,
    timestamp : Int,
    owner : Principal,
  ) : PredictionRecord {
    let suitable = input.temperature >= 20.0 and input.temperature <= 35.0
      and input.humidity >= 60.0 and input.humidity <= 90.0
      and input.rainfall >= 1000.0 and input.rainfall <= 2000.0
      and (input.soilType == "Loamy" or input.soilType == "Black Soil" or input.soilType == "Clay");

    let result = if (suitable) "Suitable" else "Not Suitable";

    let plantingTime = if (input.rainfall > 1500.0) {
      "June-July (Monsoon onset)"
    } else if (input.rainfall >= 1000.0) {
      "October-November (Post-monsoon)"
    } else {
      "February-March with irrigation"
    };

    let fertilizerSuggestion = if (input.soilType == "Loamy") {
      "NPK 120:60:60 with organic compost"
    } else if (input.soilType == "Black Soil") {
      "NPK 100:50:50, less irrigation needed"
    } else if (input.soilType == "Clay") {
      "NPK 80:40:40 with drainage improvement"
    } else {
      // Sandy
      "NPK 150:80:80 with frequent irrigation"
    };

    let baseGuidance = "Monitor for red rot and smut diseases. Maintain 30-45cm row spacing. Harvest at 12-14 months.";
    let generalGuidance = if (suitable) {
      baseGuidance # " Conditions are favorable — proceed with planting."
    } else {
      baseGuidance # " Conditions are not optimal — consider improving soil/climate parameters before planting."
    };

    {
      id;
      timestamp;
      owner;
      input;
      result;
      plantingTime;
      fertilizerSuggestion;
      generalGuidance;
    };
  };

  /// Return all records owned by caller, sorted by timestamp descending.
  public func getAll(
    predictions : List.List<PredictionRecord>,
    caller : Principal,
  ) : [PredictionRecord] {
    let owned = predictions.filter(func(r) { r.owner.equal(caller) });
    let arr = owned.toArray();
    arr.sort(func(a, b) { Int.compare(b.timestamp, a.timestamp) });
  };

  /// Remove the record with the given id owned by caller. Returns true if deleted.
  public func remove(
    predictions : List.List<PredictionRecord>,
    id : Nat,
    caller : Principal,
  ) : Bool {
    let sizeBefore = predictions.size();
    let filtered = predictions.filter(func(r) {
      not (r.id == id and r.owner.equal(caller))
    });
    let sizeAfter = filtered.size();
    if (sizeAfter < sizeBefore) {
      predictions.clear();
      predictions.append(filtered);
      true
    } else {
      false
    };
  };
};
