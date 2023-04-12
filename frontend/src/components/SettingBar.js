import React from 'react';
import toolState from '../store/toolState';
import '../styles/toolbar.scss'

const SettingBar = () => {
    return (
        <div className="settingBar">
            <label htmlFor='line-width'>Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{ margin: '0 10px' }}
                id='line-width'
                type="number"
                min={1} max={50}
                defaultValue={1} />

            <label htmlFor='stroke-color'>Цвет обводки</label>
            <input
                onChange={e => toolState.setSrokeColor(e.target.value)}
                id='stroke-color'
                type="color" />
        </div>
    )
}

export default SettingBar;