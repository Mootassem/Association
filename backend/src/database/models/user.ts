import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
import TenantUserSchema from './schemas/tenantUserSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('user');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const UserSchema = new Schema(
    {
      employeur: { type: String, maxlength: 24 },
      date_naissance: { type: Date },
      secteur: {
        type: String,
        enum: [
          'AGRO_ALIMENTAIRE',
          'ASSURANCES',
          'AUDIOVISUEL',
          'BANCAIRE',
          'CHIMIE',
          'COMPOSANTS_AUTOMOBILES',
          'DISTRIBUTION',
          'DISTRIBUTION_AUTOMOBILE',
          'DIVERS',
          'FINANCIER',
          'HOLDING',
          'IMMOBILIER',
          'INDUSTRIEL',
          'LEASING',
          'LOGISTIQUE_TRANSPORT',
          'PHARMACEUTIQUE',
          'SANTÉ',
          'TOURSIME',
          'INFORMATION_TECHNOLOGY',
          null,
        ],
      },
      profession: {
        type: String,
        maxlength: 24,
      },
      adresse: {
        type: String,
        maxlength: 24,
      },
      cin: {
        type: String,
        maxlength: 8,
      },
      etat_civil: {
        type: String,
        enum: ['marié', 'célébataire', null],
      },
      lien_facebook: {
        type: String,
      },
      parrain: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false,
      },
      fullName: { type: String, maxlength: 255 },
      firstName: { type: String, maxlength: 80 },
      lastName: { type: String, maxlength: 175 },
      phoneNumber: { type: String, maxlength: 24 },
      provider: { type: String, maxlength: 255 },
      providerId: { type: String, maxlength: 255 },
      email: {
        type: String,
        maxlength: 255,
        index: { unique: true },
      },
      password: {
        type: String,
        maxlength: 255,
        select: false,
      },
      emailVerified: { type: Boolean, default: false },
      emailVerificationToken: {
        type: String,
        maxlength: 255,
        select: false,
      },
      emailVerificationTokenExpiresAt: { type: Date },
      passwordResetToken: {
        type: String,
        maxlength: 255,
        select: false,
      },
      passwordResetTokenExpiresAt: { type: Date },
      avatars: [FileSchema],
      tenants: [TenantUserSchema],
      jwtTokenInvalidBefore: { type: Date },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String, maxlength: 255 },
    },
    {
      timestamps: true,
    },
  );

  UserSchema.index(
    { importHash: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );

  UserSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  UserSchema.set('toJSON', {
    getters: true,
  });

  UserSchema.set('toObject', {
    getters: true,
  });

  return database.model('user', UserSchema);
};
