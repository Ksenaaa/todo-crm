import React from 'react'

import { ButtonTriangle } from '../ButtonTriangle/ButtonTriangle'

import styles from './Header.module.scss'

export const Header = ({ isIconsVisible }) => {
    return (
        <thead className={styles.component}>
            <tr>
                <th>
                    Статус
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th>
                    Товар
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th>
                    ID
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
                <th>
                    Название
                    {isIconsVisible && <ButtonTriangle />}
                    <input type="text" />
                </th>
            </tr>
        </thead>
    )
}
