import React from 'react'



const ArchivePageHeader = () => {
    const { data, loading, error } = useQuery(GetCategories)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

  return (
    <>
    <Container>
        <NavBar/>
        <HeroSection />
        <StatCard />
    </Container>
    </>
  )
}

export default ArchivePageHeader