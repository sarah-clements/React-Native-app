import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    section: {
        paddingLeft: 15,
        paddingRight: 15
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        margin: 0
    },
    author: {
        height: 44,
        textAlign: 'left',
        color: 'grey'
    },
    upvotes: {
        textAlign: 'right',
        color: 'grey'
    },
    thumbnail: {
        height: 50,
        width: 50,
        marginRight: 10
    },
    thumbnail_large: {
        height: 300,
        width: 300
    },
    subtitle: {
        color: 'grey',
        paddingBottom: 10
    }
})
