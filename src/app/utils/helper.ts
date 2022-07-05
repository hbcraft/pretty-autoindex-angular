import * as moment from 'moment'
moment.locale(window.navigator.language.toLowerCase())
export class Helper {
  static getReadableSize(size: Required<PropertyValue>['size']): string {
    const i = Math.floor(Math.log(size) / Math.log(1024))
    return (
      +(size / Math.pow(1024, i)).toFixed(2) + ['B', 'kB', 'MB', 'GB', 'TB'][i]
    )
  }
  static makeSizeString(
    propertyConfig: SizeConfig,
    data: Required<PropertyValue>['size']
  ): string {
    let ret: string = ''
    switch (propertyConfig['type']) {
      case 'raw':
        ret = data + ' ' + 'byte(s)'
        break
      case 'readable':
        ret = this.getReadableSize(data)
        break
      case 'both':
        ret =
          this.getReadableSize(data) + ' ' + '(' + data + ' ' + 'byte(s)' + ')'
        break
    }
    return ret
  }
  static getReadableDate(time: Required<PropertyValue>['date']): string {
    const d = new Date(time)
    return (
      d.getFullYear() +
      '/' +
      d.getMonth() +
      '/' +
      d.getDate() +
      ' ' +
      d.toLocaleTimeString()
    )
  }
  static getMomentDate(time: Required<PropertyValue>['date']): string {
    const m = moment(new Date(time))
    return time && m.isValid() ? m.fromNow() : ''
  }
  static makeDateString(
    propertyConfig: DateConfig,
    data: Required<PropertyValue>['date']
  ): string {
    let ret = ''
    switch (propertyConfig['type']) {
      case 'raw':
        ret = this.getReadableDate(data)
        break
      case 'moment':
        ret = this.getMomentDate(data)
        break
      case 'both':
        ret =
          this.getReadableDate(data) +
          ' ' +
          '(' +
          this.getMomentDate(data) +
          ')'
        break
    }
    return ret
  }
  static showProperty(
    propertyName: keyof PropertyValue,
    propertyConfig: Configs,
    property: PropertyValue
  ): string {
    if (typeof property[propertyName] == 'undefined') return ''
    let ret: string = ''
    switch (propertyName) {
      case 'size':
        ret = this.makeSizeString(
          propertyConfig as SizeConfig,
          property['size'] as number
        )
        break
      case 'date':
        ret = this.makeDateString(
          propertyConfig as DateConfig,
          property['date'] as string
        )
        break
      default:
        ret = ''
        break
    }

    return ret.length ? ret + ' - ' : ''
  }
}
