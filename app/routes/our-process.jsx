import PageHeader from '~/components/shared/PageHeader'
import ProcessSection from '~/components/index/ProcessSection'
import TechSection from '~/components/index/TechSection'

function Index() {
  return (
    <div>
      <PageHeader
        title='Our Process'
        body='Website design with your business goals in mind.'
        bg={true}
      />
      <ProcessSection />
      <TechSection />
    </div>
  )
}

export default Index
