"use client"
import { useState, useEffect, useCallback } from 'react'

interface UserData {
    ID: number,
    JobTitle: string,
    EmailAddress: string,
    FirstNameLastName: string,
    Email: string,
    Phone: number,
    Company: string
}

interface DataFetched {
    data: UserData[],
    currentPage: number,
    prevPage: React.MouseEventHandler<HTMLButtonElement>,
    nextPage: React.MouseEventHandler<HTMLButtonElement>,
    isLoading: boolean
}

const usePaginate = (): DataFetched => {
    const [data, setData] = useState<UserData[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            let response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${currentPage}/next`)
            let jsonResponse = await response.json();

            setData(jsonResponse.users);
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const nextPage = () => setCurrentPage(prev => prev + 1)

    const prevPage = () => {
        if (currentPage > 1) { setCurrentPage(prev => prev - 1) }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage])

    return { data, currentPage, nextPage, prevPage, isLoading }
}

export default usePaginate