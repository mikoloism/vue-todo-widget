import _ from 'lodash'
const simpleSchema = {
  fieldName: {
    type: 'fieldType',
    defaut: 'fieldDefaultValue',
    required: true || false,
    props: {}, // if type is object
    item: {}, // if type is array
  },
}
const Types = {
  STRING: 'STRING',
  STR: 'STRING',
  NUMBER: 'NUMBER',
  NUM: 'NUMBER',
  INTEGER: 'INT',
  INT: 'INT',
  BOOLEAN: 'BOOLEAN',
  BOOL: 'BOOLEAN',
  DATE: 'DATE',
}
function Schems(schema = {}) {
  const _is = (value, type) => {
    switch (type) {
      case Types.STRING:
        return _.isString(value)
      case Types.NUMBER:
        return _.isInteger(value)
      case Types.INTEGER:
        return _.isInteger(value)
      case Types.BOOLEAN:
        return _.isBoolean(value)
      case Types.DATE:
        return _.isDate(value)
      default:
        return false
    }
  }

  const validate = (object) => {
    const match = {}
    const valids = []
    const invalids = []
    const res = {}
    _.map(schema, (item, key) => {
      const { type, default: def } = item
      const value = object[key]
      _.assign(match, {
        [key]: {
          valid: _is(value, type),
          type,
          value: _is(value, type) ? value : def,
        },
      })
    })
    _.each(match, (item, key) => {
      const { valid, value } = item
      _.assign(res, { [key]: value })
      if (valid) valids.push(key)
      else invalids.push(key)
    })
    return { match, valids, invalids, res }
  }

  const valid = (array) => {
    const validation = []
    _.each(array, (item) => {
      validation.push(validate(item))
    })
    return validation
  }

  return { validate, valid, Types }
}
export { Types, simpleSchema }
export default Schems

//  // #region Frame
//  const createModel = (object) => {
//     const fragmentModel = []
//     _.forEach(object, (value, key) => {
//       const sch = {}
//       _.assign(
//         sch,
//         { name: key || '' },
//         { type: value.type || null },
//         { default: value.def || undefined }
//       )
//       if (_.isObject(value.props) && !_.isNull(value.props))
//         _.assign(sch, { props: value.props })
//       fragmentModel.push(sch)
//     })
//     return fragmentModel
//   }
//   const Model = createModel(schema)
//   const createReadable = (object) => {
//     const fragmentModel = []
//     _.forEach(object, (value, key) => {
//       const sch = {}
//       _.assign(
//         sch,
//         { name: key || '' },
//         { value: value || Model.find((m) => m.name === key).def }
//       )
//       fragmentModel.push(sch)
//     })
//     return fragmentModel
//   }
//   const isValid = false
//   const check = (data) => {
//     const model = createReadable(data)
//     const fragment = []
//     _.each(Model, (item, index) => {
//       const {
//         name: ModelName,
//         required: ModelRequired = false,
//         // def: ModelDef,
//         type: ModelType,
//       } = item
//       const { name: ItemName, value: ItemValue } = model[index]

//       console.log(ModelName, is(ModelType, ItemValue))
//       if (!ItemName) {
//         if (ModelRequired) {
//           console.error('Here')
//         }
//         return null
//       }
//       if (ItemName === ModelName) {
//         if (!_.isEmpty(ItemValue))
//           if (is(ModelType, ItemValue)) fragment.push(true)
//           else fragment.push(false)
//         else fragment.push(false)
//       } else return false
//     })
//     return { model, Model, fragment }
//   }
//   // #endregion Frame
