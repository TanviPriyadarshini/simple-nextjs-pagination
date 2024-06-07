export const fetchData = async () => {
    let response = await fetch("https://give-me-users-forever.vercel.app/api/users/1/next")
    const data = await response.json();
    console.log("🚀 ~ fetchData ~ data:", data)
    return data
}