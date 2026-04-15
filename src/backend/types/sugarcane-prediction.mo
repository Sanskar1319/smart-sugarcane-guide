module {
  public type PredictionInput = {
    temperature : Float;
    humidity : Float;
    rainfall : Float;
    soilType : Text;
  };

  public type PredictionRecord = {
    id : Nat;
    timestamp : Int;
    owner : Principal;
    input : PredictionInput;
    result : Text;
    plantingTime : Text;
    fertilizerSuggestion : Text;
    generalGuidance : Text;
  };
};
