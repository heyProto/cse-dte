ProtoGraph.initDataApp = function () {
    var x = new ProtoGraph.Card.toMaps(),
        streams = ProtoGraph.streams,
        page = ProtoGraph.page;

    x.init({
        selector: document.querySelector('#card-list-div'),
        dataURL: './data.json',//streams.Grid.url,
        topoURL: './india-topo.json',//'https://p.factchecker.in/data/india-topo.json',
        chartOptions: {
            height: 700,
            defaultCircleColor: ProtoGraph.site['house_colour']
        },
        filterConfigurationJSON: {
            colors: {
                house_color: ProtoGraph.site['house_colour'],
                text_color: '#343434',
                active_text_color: ProtoGraph.site['house_colour'],
                filter_summary_text_color: ProtoGraph.site['reverse_font_colour']
            },
            selected_heading: 'FILTERS',
            reset_filter_text: 'Reset'
        },
        filters: [
            {
                "alias": "Subject",
                "propName": "subject"
            },
            {
                "alias": "Petition filing year",
                "propName": "petition_filing_year"
            },
            {
                "alias": "Location",
                "propName": "location"
            },            
            {
                "alias": "Court involved",
                "propName": "court_involved"
            },
            {
                "alias": "Petitioner type",
                "propName": "petition_type"
            },
            {
                "alias": "Respondent type",
                "propName": "respondent_type"
            },
            {
                "alias": "Petition result",
                "propName": "petition_result"
            }
        ]
    });
    x.renderLaptop();
}