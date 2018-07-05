export default class GDPRConfigBuilder {

    constructor()
    {
        this.config = {
            locale:{
                gdpr_title:'gdpr_title',
                gdpr_description:'',
                gdpr_validate:'gdpr_validate',
                gdpr_active:'gdpr_active',
                gdpr_inactive:'gdpr_inactive',
                gdpr_always_active:'gdpr_always_active'
            },
            content:[]
        }
            
    }

    setLocale(title='gdpr_title',description='',validate='gdpr_validate',active='gdpr_active',inactive='gdpr_inactive',always_active='gdpr_always_active')
    {
        this.config.locale.gdpr_title = title
        this.config.locale.gdpr_description = description
        this.config.locale.gdpr_validate = validate
        this.config.locale.gdpr_active = active
        this.config.locale.gdpr_inactive = inactive
        this.config.locale.gdpr_always_active = always_active
        return this
    }

    addSetting(id,title,description,isAllowed,allowChange)
    {
        let setting = {
            id,
            title,
            description,
            isAllowed,
            allowChange
        }
        this.config.content.push(setting)
        return this
    }

    getConfig()
    {
        return this.config
    }


}