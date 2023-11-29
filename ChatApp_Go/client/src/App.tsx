import { useState, lazy, Suspense } from 'react';
import { Header, Main, Text, Box } from 'grommet';
import { Chat as ChatIcon } from 'grommet-icons';
import { JoinBox } from './components/JoinBox/JoinBox';
import RoomWatcher from './components/RoomWatcher/RoomWatcher';

const Chat = lazy(() => import('./components/Chat/Chat'));

function App() {
    const [joined, setJoined] = useState(false);

    return (
        <Suspense fallback={null}>
            <Header sticky='scrollup' background='purple' width='100vw' elevation='medium' justify='center' pad='small'>
                <ChatIcon color='black' />
                <Text weight='bold' color='black'>
                    CHAT APPLICATION
                </Text>
            </Header>
            <Main pad='medium' flex width='100vw' align='center'>
                {!joined ? (
                    <Box>
                        <JoinBox onSubmit={() => setJoined(true)} />
                        <RoomWatcher onSubmit={() => setJoined(true)} />
                    </Box>
                ) : (
                    <Chat onExit={() => setJoined(false)} />
                )}
            </Main>
        </Suspense>
    );
}

export default App;
