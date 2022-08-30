import { DataTypes } from 'sequelize'

const userModel = {
  name: 'user',
  definition: {
    supertokensId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activeAccount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    pinpointProjectId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cognitoIdentityPoolId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
}

const verificationCodeModel = {
  name: 'verification_code',
  definition: {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
}

const migration_1_init = {
  userModel,
  verificationCodeModel,
}

export default migration_1_init
