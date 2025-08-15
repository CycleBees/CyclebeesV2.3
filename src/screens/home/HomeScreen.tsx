import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Typography } from '../../constants';
import { Button, Card } from '../../components/ui';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello! 👋</Text>
        <Text style={styles.subtitle}>What can we help you with today?</Text>
      </View>

      <View style={styles.quickActions}>
        <Card variant="elevated" style={styles.actionCard}>
          <Button 
            title="Book Repair" 
            onPress={() => {}}
            style={styles.actionButton}
          />
        </Card>
        
        <Card variant="elevated" style={styles.actionCard}>
          <Button 
            title="Book Rental" 
            onPress={() => {}}
            variant="secondary"
            style={styles.actionButton}
          />
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <Card variant="outlined">
          <Text style={styles.emptyText}>No recent activity</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    padding: Spacing.lg,
    backgroundColor: Colors.background.secondary,
  },
  greeting: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: Typography.fontWeight.bold,
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: Typography.fontSize.md,
    color: Colors.text.secondary,
    marginTop: Spacing.xs,
  },
  quickActions: {
    padding: Spacing.lg,
    flexDirection: 'row',
    gap: Spacing.md,
  },
  actionCard: {
    flex: 1,
  },
  actionButton: {
    width: '100%',
  },
  section: {
    padding: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.text.primary,
    marginBottom: Spacing.md,
  },
  emptyText: {
    fontSize: Typography.fontSize.md,
    color: Colors.text.secondary,
    textAlign: 'center',
    paddingVertical: Spacing.lg,
  },
});

export default HomeScreen;