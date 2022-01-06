import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { RecordApi } from '../../api/RecordApi';
import resumeOrStartStudy from '../../models/process/resumeOrStartStudy';
import { Copyright } from '../footer/Copyright';
import ProgressBar from '../progress/ProgressBar';


export default function StudyMainFrame() {
    const router = useRouter()
    const [doneTopicNum, setDoneTopicNum] = useState(0)

    useEffect(() => {
        const setDoneTopic = async () => {
            const result = await RecordApi.getDoneTopics()
            setDoneTopicNum(result.length)
        }
        setDoneTopic()
    }, [])

    const handleNext = async () => {
        await resumeOrStartStudy()
        router.push("/question/1_question")
    }

    const goDashboard = () => {
        router.push("/dashboard")
    }


    return (
        <React.Fragment>
            <main style={{
                width: 'auto',
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <Paper style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    {/* タイトル */}
                    <Typography component="h1" variant="h4" align="center">
                        Your English is getting better!
                    </Typography>


                    <React.Fragment>
                        <ProgressBar
                            value={doneTopicNum}
                            maximum={20}
                        />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}>
                            <Button
                                onClick={goDashboard}
                                style={{
                                    marginTop: "30px",
                                    marginLeft: "10px",
                                }}
                            >
                                ダッシュボードへ行く
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                style={{
                                    marginTop: "30px",
                                    marginLeft: "10px",
                                }}
                            >
                                次の課題もやる
                            </Button>
                        </div>
                    </React.Fragment>

                </Paper>
                <Copyright />
            </main>
        </React.Fragment >
    );
}