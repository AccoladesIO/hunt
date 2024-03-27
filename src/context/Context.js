import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
const Context = createContext()

const ContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const [search, setSearch] = useState('')
    const [active, setActive] = React.useState('Latest')
    const [searchResult, setSearchReasult] = useState([])
    const [news, setNews] = useState([])
    // switch the active tab to a new tab
    const activeTab =(e) => {
        setActive(e)
        console.log(e)
      }

    const onChange = (e) =>(
        setSearch(e.target.value)
    )

    // function for dark mode toggle
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem('darkMode') || 'false')
      if (storedData) setDarkMode(storedData) 
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
        if (darkMode) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [darkMode])

    // fetch data from the news api
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://google-search74.p.rapidapi.com/',
            params: {
              query: 'Nike',
              limit: '10',
              related_keywords: 'true'
            },
            headers: {
              'X-RapidAPI-Key': '72f89a4384mshc969d49caf3f9a8p1a886cjsna6cf3c549066',
              'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
          };
          
        try{
            const response = await axios.request(options)
            const data = response.data
            console.log('Data:', data)
            setNews(data)
        }catch(err) {
            console.error('Error fetching data:', err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [active])
    return (
        <Context.Provider value={{darkMode, setDarkMode, toggleDarkMode, search, onChange, active, activeTab}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}