# Generated by Django 4.2.11 on 2024-05-06 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adv_no', models.CharField(max_length=200)),
                ('post_name', models.CharField(max_length=500)),
                ('category_name', models.CharField(max_length=200)),
                ('state_ut', models.CharField(max_length=100)),
                ('sub_category_name', models.CharField(blank=True, max_length=200, null=True)),
                ('post_date', models.DateField(null=True)),
                ('short_desc', models.TextField()),
                ('total_vacancy', models.IntegerField()),
                ('gen_fees', models.IntegerField()),
                ('others_fees', models.IntegerField(blank=True, null=True)),
                ('ph_fees', models.IntegerField(blank=True, null=True)),
            ],
        ),
    ]