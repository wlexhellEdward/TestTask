import { Button, Icon, Typography } from '@mui/material'
import travel from 'assets/img/travel.svg'

import DoesntExistPhoto from '/public/doesntExist.png'

import { ButtonTravelProps } from './interfaces'
import ButtonTravelStyle from './styled'

export default function ButtonTravel({ handleFunction }: ButtonTravelProps) {
    const useButtonTravelStyle = ButtonTravelStyle()
    return (
        <>
            <Button onClick={() => handleFunction()} className={useButtonTravelStyle.classes.buttonTravel}>
                <Icon className={useButtonTravelStyle.classes.iconTravel}>
                    <img src={travel} alt={DoesntExistPhoto} title="travel button photo" />
                </Icon>
                <Typography className={useButtonTravelStyle.classes.buttonTravelTitle}>Маршрут</Typography>
            </Button></>
    )
}
