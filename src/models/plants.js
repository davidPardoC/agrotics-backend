import mongoose, { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const plantSchema = new Schema({
  commonName: { type: String },
  cientificName: { type: String },
  createdAt: { type: Date, default: Date.now() },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imgLink: { type: String },
  origin: { type: String },
  taxonomy: { type: String },
  morfology: { type: String },
  vegetalMateria: { type: String },
  lifeCycle: { type: String },
  productionZone: { type: String },
  cultivationWork: { type: String },
  groundPreparation: { type: String },
  goodAssociation: { type: String },
  badAssociation: { type: String },
  irrigation: { type: String },
  badHerbsControl: { type: String },
  recolectionAndStore: { type: String },
  nutritionalValue: { type: String },
  plantSize: { type: String },
  productionWeather: { type: String },
  temperatures: { type: String },
  humidity: { type: String },
  soils: { type: String },
  sowingTime: { type: String },
  hotBed: { type: String },
  plantation: { type: String },
  composting: { type: String },
  plagues: { type: String },
  averageProduction: { type: String },
  application: { type: String },
});

plantSchema.plugin(mongoosePaginate);

const plantModel = model("plants", plantSchema);

const options = {
  page: 1,
  limit: 10,
  collation: {
    locale: "en",
  },
  populate: "createdBy",
};

plantModel.paginate({}, options);

export default plantModel;