declare var conf: {
  name: string
  address: string
  visibilityOptions: PropertyConfigs
}
interface PropertyConfig {
  use: boolean
}
interface SizeConfig extends PropertyConfig {
  type: 'raw' | 'readable' | 'both'
}
interface DateConfig extends PropertyConfig {
  type: 'raw' | 'moment' | 'both'
}
type Configs = SizeConfig | DateConfig
interface PropertyConfigs {
  size: SizeConfig
  date: DateConfig
}
interface PropertyValue {
  size?: number
  date?: string
}
