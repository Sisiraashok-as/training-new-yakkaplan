CHARGEBEE_API_KEY = ENV['CHARGEBEE_API_KEY']
CHARGEBEE_WEBSITE = ENV['CHARGEBEE_WEBSITE']
ChargeBee.configure(site: CHARGEBEE_WEBSITE || 'grapple-test',
                    api_key: CHARGEBEE_API_KEY)