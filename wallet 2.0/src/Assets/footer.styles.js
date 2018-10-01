const footerStyles = {
    mainDivStyle: {
        backgroundColor: '#54609a',
        height: 55,
        paddingTop: 5,
        paddingRight: 25,
        paddingLeft: 10,
        position: 'absolute',
        bottom: 0
    },
    testLabelStyle: {
        color: '#FAFAFA',
        textTransform: 'none',
        fontSize: 16
    },
    firstColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    },
    headingStyle: {
        color: '#FAFAFA',
        textTransform: 'none',
        fontSize: 14,
        marginBottom: 0,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    valueStyle: {
        color: '#FAFAFA',
        textTransform: 'none',
        fontSize: 14,
        marginBottom: 0,
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    textCenter: {
        textAlign: 'center'
    },
    disconnectStyle: {
        color: 'rgb(206, 122, 122)',
        border: '1px solid rgb(214, 147, 147)',
        padding: 2,
        marginLeft: -15,
        marginTop: 8,
        minHeight: 30
    }
}

module.exports = {
    footerStyles
}