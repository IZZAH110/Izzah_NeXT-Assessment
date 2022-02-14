#!/usr/bin/env python
# coding: utf-8

# In[1]:
import pandas as pd
import plotly.express as px
# In[2]:
url = 'http://api.open-notify.org/iss-now.json'
# In[3]:
df = pd.read_json(url)
# In[4]:
df
# In[5]:
df ['latitude'] = df.loc['latitude'.'iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reser_index(inppplace=True)
# In[6]:
df ['latitude'] = df.loc['latitude','iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reser_index(inppplace=True)
# In[7]:
df ['latitude'] = df.loc['latitude','iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reser_index(inplace=True)
# In[8]:
df ['latitude'] = df.loc['latitude','iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reset_index(inplace=True)
# In[9]:


df


# In[10]:


df = df.drop(['index','message'],axis=1)


# In[11]:


df


# In[12]:


fig = px.scatter_geo(df, lat='latitude',
                    lon='longitude')
fig.show()


# In[13]:


df ['latitude'] = df.loc['latitude','iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reset_index(inplace=True)


# In[14]:


df ['latitude'] = df.loc['latitude','iss_position']
df['longitude'] = df.loc['longitude','iss_position']
df.reset_index(inplace=True)


# In[15]:


df = pd.read_json(url)


# In[16]:


df


# In[17]:


fig = px.scatter_geo(df, lat='latitude',
                    lon='longitude')
fig.show()


# In[18]:


fig = px.scatter_geo(df, lat'latitude',
                    lon= 'longitude')
fig.show()


# In[19]:


fig = px.scatter_geo(df, lat='latitude',
                    lon= 'longitude')
fig.show()


# In[20]:


fig= px.scatter_geo(df, lat='latitude'
                   lon='longitude')
fig.show()


# In[ ]:




