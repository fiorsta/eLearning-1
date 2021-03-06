import React, { Component, Fragment } from 'react'
import { Container } from '@material-ui/core'
import { connect } from 'react-redux'
import Lesson from 'components/Lesson/Lesson'
import { lessonsLoadAction } from 'actions/lessons'
import ScrollableFeed from 'react-scrollable-feed'


class LessonContainerClass extends Component {
    render(){
        const { lessons, lessonId } = this.props
        const currentLesson = this.props.lessons[this.props.lessonId]
        return(
            <>
            <Container maxWidth="md">
                <ScrollableFeed>
                    <Lesson lesson={ currentLesson } />
                </ScrollableFeed>
               
            </Container>
               
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        lessonsLoadAction: () => dispatch(lessonsLoadAction()),
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps
    const { lessonId, lessons } = state.lessons

    return {
        lessonId,
        lessons
    }
}

export const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(LessonContainerClass)