import Container from '@/components/shared/Container'
import AdaptiveCard from '@/components/shared/AdaptiveCard'
import NovelListTable from './components/NovelListTable'
import NovelListActionTools from './components/NovelListActionTools'
import NovelListTableTools from './components/NovelListTableTools'

const NovelList = () => {
    return (
        <Container>
            <AdaptiveCard>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3>小说列表</h3>
                        <NovelListActionTools />
                    </div>
                    <NovelListTableTools />
                    <NovelListTable />
                </div>
            </AdaptiveCard>
        </Container>
    )
}

export default NovelList
