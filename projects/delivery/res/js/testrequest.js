﻿function testrequest() {
    alert("running");
    $.ajax({
        url: "https://www.tesco.com/groceries/en-GB/slots/delivery/2020-04-11?slotGroup=1",
        headers: {
            "accept": "application/json", "cookie": "consumer=default; trkid=0909cdbc-d160-4a17-bf75-928769312be6; atrc=aba9a913-6230-40ce-8524-cf752afae3e2; DCO=wdc; h-e=1fa76a69cd8f36a31d69be30bb58d732cda44b26ee1d4ae2b51855289b700d96; cookiesAccepted=1586615507830; ighs-sess=eyJwYXNzcG9ydCI6eyJ1c2VyIjp7ImlkIjoiYjBmYjU1ZWMtNThhZi00MzRkLWE5YTAtZTI5NmI0NjhhNzA4In19LCJzdG9yZUlkIjoiMzA1NSIsImFuYWx5dGljc1Nlc3Npb25JZCI6IjEzMDM3MDljOTZkZTE2YWRhZGVkYWYzYjk3OTI3NmRmIiwicmVxdWVzdEJhY2t1cHMiOlt7ImlkIjoiOTQwMTdjOTItYmUxYS00ZGIzLThmMjQtNDlhYTcxZDc3NDE3IiwibWV0aG9kIjoiUFVUIiwidXJsIjoiL2dyb2Nlcmllcy9lbi1HQi90cm9sbGV5L2l0ZW1zP19tZXRob2Q9UFVUIiwiYm9keSI6eyJpdGVtcyI6W3siaWQiOiIyODE5MjY0MDIiLCJuZXdWYWx1ZSI6MSwib2xkVmFsdWUiOjAsIm5ld1VuaXRDaG9pY2UiOiJwY3MiLCJvbGRVbml0Q2hvaWNlIjoicGNzIn1dLCJyZXR1cm5VcmwiOiIvZ3JvY2VyaWVzL2VuLUdCL3Nob3AvZHJpbmtzL2Zpenp5LWRyaW5rcy1hbmQtY29sYS9hbGwtY29sYSJ9LCJ0aW1lc3RhbXAiOjE1ODY2MTU1MjA2MDB9XX0=; ighs-sess.sig=93sC8nBJyMlGKwZM58EQw7NcL9k; HYF=0; waitingRoom=%7B%22key%22%3A%2220170825001%22%2C%22access%22%3A%22GRANTED%22%2C%22granted%22%3A1586615850%2C%22ttl%22%3A1586615910033%2C%22uuid%22%3A%221586615505414-6390077%22%2C%22hash%22%3A%22143655c7%22%2C%22queueingSince%22%3A1586615505424%7D; atrc=aba9a913-6230-40ce-8524-cf752afae3e2; _csrf=0nkftZmfJmybZAQb18YRfIou; bm_sz=5E82B34800EE204143D09D90DF9E5D9A~YAAQDA8DF2jsg2VxAQAAQAinaQcc6KR+8ZJVwarzHrBafJMLwFvHPE3anElICUTnkuCYhocNwx9fQdL2rMs/TU5uv2OwG65bEO6x95PyPpe/AQ7ylQZwsyW7wjPlq4lT+S9a6T2b4E9gwNobcgMl7cZ4WBvqRpfN7FeH4rbp04U2nRffZZIKu86mvpCJkQ==; AMCVS_E4860C0F53CE56C40A490D45%40AdobeOrg=1; _ga=GA1.2.1546908418.1586615488; _gid=GA1.2.303741955.1586615488; s_vi=[CS]v1|2F48EA600515EB12-40000604258DD3B2[CE]; s_ecid=MCMID%7C86187239611528600802060644473966579502; s_cc=true; DCACC=AWS1; AMCV_E4860C0F53CE56C40A490D45%40AdobeOrg=-1712354808%7CMCIDTS%7C18364%7CMCMID%7C86187239611528600802060644473966579502%7CMCAAMLH-1587220289%7C6%7CMCAAMB-1587220289%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1586622689s%7CNONE%7CMCAID%7C2F48EA600515EB12-40000604258DD3B2%7CvVersion%7C4.3.0; OAuth.AccessToken=b0fb55ec-58af-434d-a9a0-e296b468a708; OAuth.TokensExpiryTime=%7B%22AccessToken%22%3A1586619099896%2C%22RefreshToken%22%3A1586622699896%7D; UUID=31217351-e444-47e5-b179-8233c5cd2b49; CID=111395274; trm=UKG2XURaWY48JghnuhitpGtXC1spyHDf%2BzBvm%2BJzbolbWwfmH0AeaOiu4OMiPvPNu5PVzxdbmlf%2BbTrf03FwZ6hjEGobdEe%2BUY1nKrvzuInMoE06wsvixSs3cHXjXQKDYiWHtRKjW6PCQCkq0VOhzJVnF%2FpnWfgi86ckjMcef3jT3dPTLu8D2O79UT%2F0Hx1N; s_gpv_pn=account-landing; s_nr=1586615500104-New; _abck=EF715CE25671B1D8BEA77F24FC7F5F7B~0~YAAQjuEWAoxrs2RxAQAAnUGnaQO9h/nZaoASqfoxXUXoE0b/83/YS6KDMPaVZ/fi2wocdU8DkgplZQsqi2b0JOH0hFQlQGIXQ9R9QKlD5AUaLbAnX1a7gvB2+12hztAT30AbrpE6+nGM0xjfAy+fc3VFuNRF070NLdkGt8Aze17jDeO/K49F0DNSb/+Kj0kSgqKYRbF74xm4Uc9rkHDA5moDjBbAUwiFXs5pfW0My54JTHLOOr13uFK6RhL/4pFmSZTX+ECOFctb9t7s0WRYSq3UkjU6mWdPE5JAVnmt1po/wC+2w3crqI+PBLoYdrUEqhym7QrP~-1~-1~-1; DCM=SDC; _gcl_au=1.1.462252838.1586615509; DCIMG=WDC_TIL; s_prevpage=slots%3Adelivery; ADRUM=s=1586615848865&r=https%3A%2F%2Fwww.tesco.com%2Fgroceries%2Fen-GB%2Fslots%2Fdelivery%2F2020-04-11%3F-1495654186; cookiesAccepted=1586615852863; akavpau_tesco_groceries=1586616153~id=f5b2895856b9ef9c99b214582aec504c; _uetsid=_uetb54db94f-188f-377c-1c65-820322d4dd01; _4c_=jVPLbtswEPyVgIecIotvUgaCwo7doAWSIH2gR0MPOiYsWwJJW3WD%2FHuXiuwEboGWB4K7nF3NDFfPqFuZLRoToaWETcDCV2htDh6Nn1HZxn0ft52r0RitQmj9OE27rhsF48tmVDab9Mk1pXHW%2BNRsk9tp6usm%2BLQytd0bd0BXqGwqA9UkG2UjBnH4BZHEcGpdU%2B3KsAiHNiI6U1z4ag0Xldnb0iw6W4UVXFCm2Ft2ZezTKsSOhPXp1kUMnDq7rZruvGzInpe1dX7oTB2F3UNYuKbzJna6WblmYy50ZNiAE%2BhH38BD6MzSONejIPI2RNonK4YU%2BHfMVtaZMiS7ddJsW2ci4uHu25fFdD65ebh%2FZ6nfmOBs6d%2F5WqTep324W588jo6lJP38NaEjokY4manH%2B9RrpXGmmNZSEC0%2BTB6n1%2BRyY6trLYlWlGWSEEG1xFhjiiWWnHMFWSlUJjC9zAFKP3I9nwBEEDGfEppwDEtiToWezdiUXk4e59ckOrePLkbD66bM6%2BgBjBGIB622gYFCr3zj499OFt8%2FzSJecJlhzYkeDfPGtT76cXfTY%2F6PLXq5Qj9fp1ZhSgUTGqY2BHhJLXvSGBDOVsP4IoFNkZfLItHLSidcliopqCoSRfJCGS1YRaOsvmfGWUYEBqYUmuztsYfKjWackiTnfJlwyvKkMLxKTJ4VXGe6ADLoxEsS0MeEVAMvdmTV1kND8oalWQbfy%2FiAJfykod0f0fRcslJ%2FSn4d4cH7U61%2BV0oyJvHf3No0ha3hhzPFeTn%2Ft9kvL78B; s_sq=tescoukgroceriesprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dslots%25253Adelivery%2526link%253DApr%25252018%252520-%25252024%2526region%253Dslot-matrix%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c"
        },
        success: function (response) {
            alert(response.slots[0].slodId)
        }
    });

}