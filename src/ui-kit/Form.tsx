import { EuiSpacer, EuiTitle } from '@elastic/eui'

interface TitleProps {
  value: string
  className?: string
  size?: 'l' | 'm' | 's' | 'xs' | 'xxs' | 'xxxs'
  subTitle?: string
  spacerPos?: 'top' | 'bot'
  spacerSize?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'
}
export const Title = (props: TitleProps) => (
  <div className={`mb-2 ${props.className !== undefined && props.className}`}>
    {props.spacerPos === 'top' && <EuiSpacer size={props.spacerSize || 'xl'} />}
    <EuiTitle size={props.size || 'xs'}>
      <h4>{props.value}</h4>
    </EuiTitle>
    {props.subTitle !== undefined && (
      <p className="text-slate-400">{props.subTitle}</p>
    )}
    {props.spacerPos === 'bot' && <EuiSpacer size={props.spacerSize || 'xl'} />}
  </div>
)
