import CompanionCard from "@/components/CompanionCard"
import CompanionsList from "@/components/CompanionsList"
import CTA from "@/components/CTA"

const Page = () => {
  return (
    <main>
    <h1 className='text-2xl'>Popular Companions</h1>
    <section className="home-section">
      <CompanionCard
        id='123'
        name="ABC"
        topic="BCD"
        subject="HHH"
        duration={45}
        color="#ffda6e"
      />
      <CompanionCard
        id='123'
        name="ABC"
        topic="BCD"
        subject="HHH"
        duration={45}
        color="#e5d0ff"
      />
      <CompanionCard
        id='123'
        name="ABC"
        topic="BCD"
        subject="HHH"
        duration={45}
        color="#BDE7FF"
      />
    </section>

    <section  className="home-section">
      <CompanionsList/>
      <CTA/>
    </section>
    </main>
  )
}

export default Page