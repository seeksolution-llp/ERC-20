"use client"

import { HenceforthContracts } from "@/utils/SeekSolutionEthereum"
import { Button, Input } from "antd"
import React, { Fragment } from "react"

const HomePage = () => {
    const [token, setToken] = React.useState(0)

    const handleClick = async () => {
        const eth = new HenceforthContracts()
        const instance = await eth.contractInstance()
        await eth.transfer(instance, token)
    }

    return <Fragment>
        <Input onChange={(e) => setToken(Number(e.target.value))} />
        <Button type="primary" onClick={handleClick}>Approve</Button>
    </Fragment>

}

export default HomePage