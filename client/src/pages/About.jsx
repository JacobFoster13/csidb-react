import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'

const About = () => {

    // object of contributors
    let members ={
        jacob: {
            email: "jacob13foster@outlook.com",
            username: "jacobfoster",
            issues: 0,
            commits: 0
        },
        will: {
            email: "wdarcherjr@gmail.com",
            username: "wdarcher",
            issues: 0,
            commits: 0
        },
        yvette: {
            email: "yvettearellano422@gmail.com",
            username: "yvettea",
            issues: 0,
            commits: 0
        },
        greg: {
            email: "gregory.c2009@gmail.com",
            username: "gregory.c2009",
            issues: 0,
            commits: 0
        }
    }

    const [commits, setCommits] = useState()
    const [issues, setIssues] = useState()
    const apiUrl = "https://gitlab.com/api/v4/projects/42962784"
    const token = 'glpat-M8i2zkypG21vwK62kCPw';

    useEffect(() => {
        axios.get(apiUrl+"/repository/commits?per_page=500&private_token="+token)
            .then(res => {
                console.log(res.data)
                setCommits(res.data)
            })
            .catch((err) => {})
        axios.get(apiUrl+"/issues")
            .then(res => {
                console.log(res.data)
                setIssues(res.data)
            })
            .catch((err) => {})
    }, [])

    const getStats = () => {
        commits.forEach(com => {
            if (com.author_email === members.jacob.email) {
                members.jacob.commits ++;
            } else if (com.author_email === members.yvette.email) {
                members.yvette.commits ++;
            } else if (com.author_email === members.greg.email) {
                members.greg.commits ++;
            } else if (com.author_email === members.will.email) {
                members.will.commits ++;
            }
        })

        issues.forEach(iss => {
            if (iss.assignee != null) {
                if (iss.assignee.username === members.jacob.username) {
                    members.jacob.issues ++;
                } else if (iss.assignee.username === members.yvette.username) {
                    members.yvette.issues ++;
                } else if (iss.assignee.username === members.greg.username) {
                    members.greg.issues ++;
                } else if (iss.assignee.username === members.will.username) {
                    members.will.issues ++;
                }
            }
        })

        console.log(members)
    }

    return (
        <div>
            <h1>About</h1>
            <Button
                variant="primary"
                onClick={getStats}
                >
                    Get Stats
            </Button>
        </div>
    )
}

export default About